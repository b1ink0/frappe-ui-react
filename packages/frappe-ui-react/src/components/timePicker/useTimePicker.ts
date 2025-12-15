import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import type { Option, TimePickerProps } from "./types";
import {
  findNearestIndex,
  formatDisplay,
  formatDisplayInitial,
  minutesFromHHMM,
  normalize24,
  normalize24Initial,
  parseFlexibleTimeHelper,
} from "./utils";

export function useTimePicker({
  value = "",
  onChange,
  onInputInvalid,
  onInvalidChange,
  onOpen,
  onClose,
  interval = 15,
  options = [],
  allowCustom = true,
  autoClose = true,
  use12Hour = true,
  scrollMode = "center",
  minTime = "",
  maxTime = "",
}: Omit<TimePickerProps, "variant" | "placement" | "disabled" | "placeholder" | "suffix" | "prefix">) {
  const [internalValue, setInternalValue] = useState(normalize24Initial(value));
  const [displayValue, setDisplayValue] = useState(
    formatDisplayInitial(normalize24Initial(value), use12Hour)
  );
  const [showOptions, setShowOptions] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [invalidState, setInvalidState] = useState(false);
  const [hasSelectedOnFirstClick, setHasSelectedOnFirstClick] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const uid = useMemo(() => Math.random().toString(36).slice(2, 9), []);

  const minMinutes = useMemo(() => minutesFromHHMM(minTime), [minTime]);
  const maxMinutes = useMemo(() => minutesFromHHMM(maxTime), [maxTime]);

  const displayedOptions = useMemo<Option[]>(() => {
    if (options.length) {
      return options.map((o) => {
        const val = normalize24(o.value);
        return {
          value: val,
          label: o.label || formatDisplay(val, use12Hour),
        };
      });
    }

    const out: Option[] = [];
    for (let m = 0; m < 1440; m += interval) {
      if (minMinutes != null && m < minMinutes) continue;
      if (maxMinutes != null && m > maxMinutes) continue;
      const hh = Math.floor(m / 60)
        .toString()
        .padStart(2, "0");
      const mm = (m % 60).toString().padStart(2, "0");
      const val = `${hh}:${mm}`;
      out.push({
        value: val,
        label: formatDisplay(val, use12Hour),
      });
    }
    return out;
  }, [options, interval, minMinutes, maxMinutes, use12Hour]);

  const isOutOfRange = useCallback(
    (totalMinutes: number): boolean => {
      if (minMinutes != null && totalMinutes < minMinutes) return true;
      if (maxMinutes != null && totalMinutes > maxMinutes) return true;
      return false;
    },
    [minMinutes, maxMinutes]
  );

  const updateInvalidState = useCallback(
    (val: boolean) => {
      if (invalidState !== val) {
        setInvalidState(val);
        onInvalidChange?.(val);
      }
    },
    [invalidState, onInvalidChange]
  );

  const applyValue = useCallback(
    (val24: string, commit = false) => {
      setInternalValue(val24);
      setDisplayValue(formatDisplay(val24, use12Hour));
      if (commit || !isFocused) {
        onChange?.(val24);
      }
      updateInvalidState(false);
    },
    [use12Hour, isFocused, onChange, updateInvalidState]
  );

  const commitInput = useCallback(() => {
    const raw = displayValue;
    const parsed = parseFlexibleTimeHelper(raw);

    if (!raw) {
      setInternalValue("");
      if (!isFocused) onChange?.("");
      updateInvalidState(false);
      return;
    }

    if (!parsed.valid || isOutOfRange(parsed.total)) {
      onInputInvalid?.(raw);
      updateInvalidState(true);
      return;
    }

    const normalized = parsed.ss
      ? `${parsed.hh24}:${parsed.mm}:${parsed.ss}`
      : `${parsed.hh24}:${parsed.mm}`;

    if (
      !allowCustom &&
      !displayedOptions.some((o) => {
        const base =
          normalized.length === 8 ? normalized.slice(0, 5) : normalized;
        return o.value === base;
      })
    ) {
      const nearestIdx = findNearestIndex(parsed.total, displayedOptions);
      if (nearestIdx > -1) {
        const nearestVal = displayedOptions[nearestIdx].value;
        const committed =
          normalized.length === 8 && nearestVal.length === 5
            ? `${nearestVal}${normalized.slice(5)}`
            : nearestVal;
        applyValue(committed, true);
        return;
      }
    }
    applyValue(normalized, true);
  }, [
    displayValue,
    isFocused,
    onChange,
    updateInvalidState,
    isOutOfRange,
    onInputInvalid,
    allowCustom,
    displayedOptions,
    applyValue,
  ]);

  const select = useCallback(
    (val: string) => {
      applyValue(val, true);
      if (autoClose) setShowOptions(false);
    },
    [applyValue, autoClose]
  );

  const selectedAndNearest = useMemo(() => {
    const list = displayedOptions;
    if (!list.length) return { selected: null, nearest: null };

    const parsedTyped = parseFlexibleTimeHelper(displayValue);
    const candidate =
      isTyping && parsedTyped.valid
        ? parsedTyped.ss
          ? `${parsedTyped.hh24}:${parsedTyped.mm}:${parsedTyped.ss}`
          : `${parsedTyped.hh24}:${parsedTyped.mm}`
        : internalValue || null;

    if (!candidate) return { selected: null, nearest: null };

    const candidateCompare =
      candidate && candidate.length === 8 ? candidate.slice(0, 5) : candidate;
    const selected = list.find((o) => o.value === candidateCompare) || null;
    if (selected) return { selected, nearest: null };

    const parsed = parseFlexibleTimeHelper(candidate);
    if (!parsed.valid) return { selected: null, nearest: null };

    const idx = findNearestIndex(parsed.total, list);
    return { selected: null, nearest: idx > -1 ? list[idx] : null };
  }, [displayedOptions, displayValue, isTyping, internalValue]);

  const handleArrowDown = useCallback(
    (togglePopover: () => void, isOpen?: boolean) => {
      if (!isOpen) {
        togglePopover();
      }
    },
    []
  );

  const handleArrowUp = useCallback(
    (togglePopover: () => void, isOpen?: boolean) => {
      if (!isOpen) {
        togglePopover();
      }
    },
    []
  );

  const handleEnter = useCallback(
    (e: React.KeyboardEvent) => {
      e.preventDefault();
      commitInput();
      inputRef.current?.blur();
    },
    [commitInput]
  );

  const handleClickInput = useCallback(
    (isOpen: boolean | undefined, togglePopover: () => void) => {
      if (!isOpen) togglePopover();
      if (allowCustom) {
        setTimeout(() => {
          inputRef.current?.select();
          setHasSelectedOnFirstClick(true);
        }, 0);
      }
    },
    [allowCustom]
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    if (allowCustom && !hasSelectedOnFirstClick) {
      setTimeout(() => {
        inputRef.current?.select();
        setHasSelectedOnFirstClick(true);
      }, 0);
    }
  }, [allowCustom, hasSelectedOnFirstClick]);

  const handleBlur = useCallback(() => {
    if (showOptions) {
      setIsFocused(false);
      return;
    }
    commitInput();
    setIsFocused(false);
  }, [showOptions, commitInput]);

  const handleEscape = useCallback((e: React.KeyboardEvent) => {
    e.preventDefault();
    setShowOptions(false);
    inputRef.current?.blur();
  }, []);

  const handleDisplayValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDisplayValue(e.target.value);
      setIsTyping(true);
    },
    []
  );

  useEffect(() => {
    const normalized = normalize24(value);
    if (normalized !== internalValue) {
      setInternalValue(normalized);
      setDisplayValue(formatDisplay(normalized, use12Hour));
    }
  }, [value, internalValue, use12Hour]);

  useEffect(() => {
    if (showOptions) {
      onOpen?.();
      requestAnimationFrame(() => {
        const { selected, nearest } = selectedAndNearest;
        const target = selected || nearest;
        if (target && panelRef.current) {
          const targetEl = panelRef.current.querySelector(
            `[data-value="${target.value}"]`
          ) as HTMLElement;
          if (targetEl) {
            targetEl.scrollIntoView({
              block: scrollMode === "center" ? "center" : scrollMode === "start" ? "start" : "nearest",
            });
          }
        }
      });
    } else {
      onClose?.();
    }
  }, [showOptions, onOpen, onClose, selectedAndNearest, scrollMode]);

  const optionId = useCallback((idx: number): string => `tp-${uid}-${idx}`, [uid]);

  return {
    showOptions,
    setShowOptions,
    displayValue,
    internalValue,
    highlightIndex,
    setHighlightIndex,
    isTyping,
    panelRef,
    inputRef,
    displayedOptions,
    selectedAndNearest,
    handleArrowDown,
    handleArrowUp,
    handleEnter,
    handleClickInput,
    handleFocus,
    handleBlur,
    handleEscape,
    handleDisplayValueChange,
    select,
    optionId,
  };
}
