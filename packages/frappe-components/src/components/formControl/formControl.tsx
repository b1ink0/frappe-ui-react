import React, { useMemo, Children, isValidElement } from 'react';
import { FormControlProps } from './types';
import { Autocomplete } from '../autoComplete';
import { Checkbox } from '../checkbox';
import { TextInput } from '../textInput';
import type{ SizeTypes } from '../../types';
import FormLabel from '../formLabel';
import Textarea from '../textarea/textarea';
import { Select } from '../select';

const FormControl: React.FC<FormControlProps> = ({
  label,
  description,
  type = 'text',
  size = 'sm',
  variant = 'subtle',
  required = false,
  prefix,
  suffix,
  children,
  htmlId,
  ...attrs
}) => {
  const controlAttrs = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, style, ...rest } = attrs;
    return rest;
  }, [attrs]);

  const descriptionClasses = useMemo(() => {
    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-base',
    }[size as keyof SizeTypes];
    return `${sizeClasses} text-ink-gray-5`;
  }, [size]);

  const descriptionSlot = Children.map(children, child => {
    if (isValidElement(child) && child.props.slot === 'description') {
      return child;
    }
    return null;
  }) || (description && <p className={descriptionClasses}>{description}</p>);

  const prefixSlot = Children.map(children, child => {
    if (isValidElement(child) && child.props.slot === 'prefix') {
      return child;
    }
    return null;
  }) || prefix;

  const suffixSlot = Children.map(children, child => {
    if (isValidElement(child) && child.props.slot === 'suffix') {
      return child;
    }
    return null;
  }) || suffix;
  
  const itemPrefixSlot = Children.map(children, child => {
    if (isValidElement(child) && child.props.slot === 'item-prefix') {
      return child;
    }
    return null;
  });
  

  const renderControl = () => {
    switch (type) {
      case 'select':
        return (
          <Select
            id={htmlId}
            {...controlAttrs}
            size={size}
            variant={variant}
            prefix={prefixSlot}
            options={[]}
          />
        );
      case 'autocomplete':
        return (
          <Autocomplete
            options={controlAttrs.options}
            modelValue={controlAttrs.modelValue}
            {...controlAttrs}
          />
        );
      case 'textarea':
        return (
          <Textarea
            htmlId={htmlId}
            {...controlAttrs}
            size={size}
            variant={variant}
          />
        );
      case 'checkbox':
        return (
          <Checkbox
            htmlId={htmlId}
            {...controlAttrs}
            label={label}
            size={size}
          />
        );
      default:
        return (
          <TextInput
            htmlId={htmlId}
            {...controlAttrs}
            type={type}
            size={size}
            variant={variant}
            required={required}
            prefix={prefixSlot}
            suffix={suffixSlot}
          />
        );
    }
  };

  if (type === 'checkbox') {
    return renderControl();
  }

  return (
    <div className={`space-y-1.5 ${attrs.className || ''}`} style={attrs.style}>
      {label && <FormLabel label={label} size={size} id={htmlId} required={required} />}
      {renderControl()}
      {descriptionSlot}
    </div>
  );
};

export default FormControl;