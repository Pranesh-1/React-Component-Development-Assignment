import React from 'react';

export interface InputFieldProps {
  label: string;
  placeholder?: string;
  helperText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'outlined' | 'filled' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  errorMessage?: string;
  invalid?: boolean;
  disabled?: boolean;
  loading?: boolean;
  clearable?: boolean;
  passwordToggle?: boolean;
  onClear?: () => void; 
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  helperText,
  value = '',
  onChange,
  variant = 'outlined',
  size = 'md',
  errorMessage,
  invalid,
  disabled,
  loading,
  clearable,
  passwordToggle,
  onClear,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const id = React.useId();
  const helperId = `${id}-helper`;

const variantClasses: Record<NonNullable<InputFieldProps['variant']>, string> = {
  outlined:
    'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500',
  filled:
    'bg-gray-100 dark:bg-gray-700 border border-transparent focus:ring-2 focus:ring-blue-500',
  ghost:
    'bg-transparent border border-transparent focus:ring-0',
};

const sizeClasses: Record<NonNullable<InputFieldProps['size']>, string> = {
  sm: 'text-sm px-2 py-1 h-8 rounded-md',
  md: 'text-base px-3 py-2 h-10 rounded-md',
  lg: 'text-lg px-4 py-3 h-12 rounded-lg',
};
  
  const rightPaddingForButtons = size === 'sm' ? 'pr-9' : size === 'md' ? 'pr-11' : 'pr-12';

  const baseInput =
    'w-full transition-colors placeholder-gray-400 focus:outline-none';

  const invalidClasses = invalid ? 'ring-1 ring-red-500 border-red-500' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const loadingClasses = loading ? 'opacity-60 cursor-wait' : '';

  const inputClassName = [
    baseInput,
    variantClasses[variant],
    sizeClasses[size],
    rightPaddingForButtons,
    invalidClasses,
    disabledClasses,
    loadingClasses,
  ].join(' ');


  const preventBlur = (e: React.MouseEvent) => e.preventDefault();

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          aria-invalid={invalid || undefined}
          aria-describedby={helperText || errorMessage ? helperId : undefined}
          type={passwordToggle && !showPassword ? 'password' : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={disabled || loading ? undefined : onChange}
          disabled={disabled || loading}
          className={inputClassName}
        />

        {/* Buttons container (clear + password) */}
        {(clearable && value) || passwordToggle ? (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            {clearable && value && (
              <button
                type="button"
                aria-label="Clear input"
                onMouseDown={preventBlur}
                onClick={() => {
                  if (onClear) onClear();
                  else onChange?.({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
                }}
                className="text-sm px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
                disabled={disabled || loading}
              >
                ✖
              </button>
            )}

            {passwordToggle && (
              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onMouseDown={preventBlur}
                onClick={() => setShowPassword((s) => !s)}
                className="text-sm px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
                disabled={disabled || loading}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            )}
          </div>
        ) : null}
      </div>

      {/* helper / error text */}
      {helperText && !invalid && (
        <span id={helperId} className="text-sm text-gray-500">
          {helperText}
        </span>
      )}
      {invalid && errorMessage && (
        <span id={helperId} className="text-sm text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
