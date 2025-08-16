# React Component Development Assignment

## Overview

This project contains two reusable React components built with **TypeScript** and **TailwindCSS**:

1. **InputField** – Flexible text input with validation, variants (outlined, filled, ghost), sizes (sm, md, lg), clear button, and password toggle.
2. **DataTable** – Table component with sortable columns, selectable rows, loading and empty states, fully responsive and themeable.

These components are documented and demonstrated using **Storybook**.

---

## Tech Stack

- React
- TypeScript
- TailwindCSS
- Storybook

---

## Setup & Run

```bash
# Clone the repository
git clone https://github.com/your-username/my-ui-components.git
cd my-ui-components

# Install dependencies
npm install

# Run the app locally
npm start

# Run Storybook
npm run storybook
```

- Open the app at [http://localhost:3000](http://localhost:3000)
- Open Storybook at [http://localhost:6006](http://localhost:6006)

---

## Components

### **InputField**

- **Props:** `value`, `onChange`, `label`, `placeholder`, `helperText`, `errorMessage`, `disabled`, `invalid`, `variant`, `size`, `clearable`, `passwordToggle`
- **Features:** validation, variants, sizes, clearable input, password toggle, dark/light theme
- **States covered in Storybook:** default, invalid, disabled, loading, clearable, password toggle, variants, sizes

### **DataTable**

- **Props:** `data`, `columns`, `loading`, `selectable`, `onRowSelect`
- **Features:** sortable columns, selectable rows, loading & empty states, responsive layout, dark/light theme
- **States covered in Storybook:** default, empty, loading, selectable, sortable

---

## Storybook

The components are fully documented with interactive examples.

- **Preview link:** [https://68a072712603daccb1a271a4-ofkfcbynlw.chromatic.com/]

---

## Screenshots / GIFs

(Optional – include GIFs to demonstrate interaction)

**InputField Interaction**

**DataTable Loading State**

---

## Notes / Approach

- TypeScript ensures type safety and better developer experience
- TailwindCSS used for responsive styling and theming
- Components built with scalability and reusability in mind
- Storybook used to showcase all states, variants, and sizes
- Light & dark themes supported via TailwindCSS `dark:` classes

### Description of Approach

The components were built focusing on **reusability, scalability, and flexibility**. The InputField supports multiple states and variants to cover most UI scenarios, while the DataTable handles dynamic data rendering, selection, and loading states. TailwindCSS was leveraged for rapid styling and theme support. Storybook was used to document all components with real-world examples, interactive props, and visual feedback for all states and variants.

