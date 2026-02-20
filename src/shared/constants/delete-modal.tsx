import { Button, Flex, Stack } from "@mantine/core"
import { modals } from "@mantine/modals"
import { useState } from "react"

type Props = {
    onDelete: () => Promise<unknown>
};

export const DeleteModal = ({ onDelete }: Props) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSumit = async () => {
        setIsLoading(true);
        await onDelete()
            .then(() => {
                modals.closeAll()
            })
            .finally(() => setIsLoading(false))
    };

    return (
        <Stack>
            <p>Вы действительно хотите удалить эти данные?</p>
            <Flex gap={8} justify={'end'}>
                <Button type="button" variant="outline" color=""
                    onClick={() => {
                        modals.closeAll()
                    }}>Нет</Button>
                <Button type="submit" loading={isLoading} color="crimson"
                    onClick={handleSumit}
                >Да</Button>
            </Flex>
        </Stack>
    )
};