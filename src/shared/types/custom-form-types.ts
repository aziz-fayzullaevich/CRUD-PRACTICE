export type FieldType = 'text' | 'number' | 'select' | 'textarea';

export interface FormFieldConfig {
    name: string;
    label: string;
    placeholder?: string;
    type: FieldType;
    options?: { label: string; value: string }[];
}

export interface GenericFormProps<T> {
    config: FormFieldConfig[];
    onSubmit: (data: T) => void;
    initialValues?: T;
    isLoading?: boolean;
    submitLabel?: string;
}