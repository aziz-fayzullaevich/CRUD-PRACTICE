import { useForm } from 'react-hook-form';
import { TextInput, NumberInput, Select, Button, Stack } from '@mantine/core';
import { type GenericFormProps } from '../types/custom-form-types';

export function CustomForm<T extends Record<string, any>>({
    config,
    onSubmit,
    initialValues,
    isLoading,
    submitLabel = 'Отправить',
}: GenericFormProps<T>) {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<T>({
        defaultValues: initialValues as any,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap="md">
                {config.map((field) => {
                    if (field.type === 'text') {
                        return (
                            <TextInput
                                key={field.name}
                                label={field.label}
                                placeholder={field.placeholder}
                                {...register(field.name as any)}
                                error={errors[field.name]?.message as string}
                            />
                        );
                    }

                    if (field.type === 'number') {
                        return (
                            <NumberInput
                                key={field.name}
                                label={field.label}
                                onChange={(val) => setValue(field.name as any, val as any)}
                                defaultValue={initialValues?.[field.name]}
                                error={errors[field.name]?.message as string}
                            />
                        );
                    }

                    if (field.type === 'select') {
                        return (
                            <Select
                                key={field.name}
                                label={field.label}
                                data={field.options}
                                onChange={(val) => setValue(field.name as any, val as any)}
                                defaultValue={initialValues?.[field.name]}
                            />
                        );
                    }

                    return null;
                })}

                <Button type="submit" loading={isLoading} fullWidth mt="xl" variant='gradient' size='lg'>
                    {submitLabel}
                </Button>
            </Stack>
        </form>
    );
}