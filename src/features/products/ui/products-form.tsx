import { Button, NumberInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";

interface ProductFormProps {
    initialData?: any;
    onSubmit: (data: any) => Promise<void>;
}

export const ProductsForm = ({ initialData, onSubmit }: ProductFormProps) => {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
        defaultValues: initialData || {
            title: '',
            price: 0,
            category: 'smartphones',
            description: ''
        }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <TextInput
                    label='Название'
                    {...register('title', { required: 'Обязательное поле' })}
                    error={errors.title?.message as string}
                />
                <NumberInput
                    label="Цена"
                    defaultValue={initialData?.price || 0}
                    onChange={(val) => setValue('price', Number(val))}
                />
                <TextInput
                    label="Описание"
                    {...register('description')}
                />
                <Button type="submit" loading={isSubmitting}>
                    {initialData ? 'Сохранить изменения' : 'Создать'}
                </Button>
            </Stack>
        </form>
    )
}