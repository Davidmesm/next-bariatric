import { ReactNode } from "react";
import {
  CircleStackIcon,
  CurrencyDollarIcon,
  HomeIcon,
  RectangleGroupIcon,
  ShoppingCartIcon,
  TagIcon,
  TruckIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

export type RootMenuItemType = {
  to: string;
  icon?: ReactNode;
  label: string;
  children?: Array<RootMenuItemType>;
  key: string;
};

export const rootMenuData: Array<RootMenuItemType> = [
  {
    to: "/",
    label: "Panel Principal",
    key: "home",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    to: "/sale",
    label: "Ventas",
    key: "sales",
    icon: <ShoppingCartIcon className="h-6 w-6" />,
  },
  {
    to: "/delivery",
    label: "Envíos",
    key: "delivery",
    icon: <TruckIcon className="h-6 w-6 " />,
  },
  {
    to: "/client",
    label: "Clientes",
    key: "clients",
    icon: <UsersIcon className="h-6 w-6 " />,
  },
  {
    to: "/vendor",
    label: "Vendedores",
    key: "vendor",
    icon: <UserGroupIcon className="h-6 w-6 " />,
  },
  {
    to: "/commission",
    label: "Comisiones",
    key: "commission",
    icon: <CurrencyDollarIcon className="h-6 w-6 " />,
    children: [
      {
        to: "/commission/client",
        label: "Clientes",
        key: "commission-client",
      },
      {
        to: "/commission/vendor",
        label: "Vendedores",
        key: "commission-vendor",
      },
    ],
  },
  {
    to: "/product",
    label: "Productos",
    key: "product",
    icon: <TagIcon className="h-6 w-6 " />,
  },
  {
    to: "/warehouse",
    label: "Inventario",
    key: "warehouse",
    icon: <CircleStackIcon className="h-6 w-6 " />,
  },
  {
    to: "/catalog",
    label: "Catalogo",
    key: "catalog",
    icon: <RectangleGroupIcon className="h-6 w-6 " />,
    children: [
      {
        to: "/catalog/contactChannel",
        label: "Canal de Contactos",
        key: "catalog-contact-channel",
      },
      {
        to: "/catalog/priceType",
        label: "Tipos de Precio",
        key: "catalog-price-type",
      },
      {
        to: "/catalog/banks",
        label: "Bancos",
        key: "catalog-bank",
      },
      {
        to: "/catalog/bankAccount",
        label: "Cuentas de Banco",
        key: "catalog-bank-account",
      },
      {
        to: "/catalog/paymentType",
        label: "Formas de Pago",
        key: "catalog-payment-type",
      },
      {
        to: "/catalog/nutritionist",
        label: "Nutriólogos o Grupos",
        key: "catalog-nutritionist",
      },
      {
        to: "/catalog/surgery",
        label: "Cirugías",
        key: "catalog-surgery",
      },
      {
        to: "/catalog/parcelService",
        label: "Servicios de Paquetería",
        key: "catalog-parcel-service",
      },
    ],
  },
];
