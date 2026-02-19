import { Book, BoxSearch, Profile2User } from "iconsax-reactjs";
import { ROUTES } from "./routes/routes";

export const NAV_ITEMS = [
    {
        label: 'Продукты',
        link: ROUTES.PRODUCTS,
        icon: <BoxSearch size={20} />
    },
    {
        label: 'Пользователи',
        link: ROUTES.USERS,
        icon: <Profile2User size={20} />
    },
    {
        label: 'Посты',
        link: ROUTES.POSTS,
        icon: <Book size={20} />
    },
];