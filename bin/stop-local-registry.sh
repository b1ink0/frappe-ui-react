#!/usr/bin/env bash

lsof -nti:4873 | xargs kill -9

unset NPM_CONFIG_REGISTRY
