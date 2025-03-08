"use client";

// import { products } from "@/data/products";
// import { openCart } from "@/utlis/toggleCart";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, createContext, useContext, ReactNode } from "react";

// interface Product {
//   id: number;
//   price: number;
//   quantity: number;
// }

interface ContextProps {
  // cartProducts: Product[];
  // setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  // totalPrice: number;
  // addProductToCart: (id: number) => void;
  // isAddedToCartProducts: (id: number) => boolean;
  // toggleWishlist: (id: number) => void;
  // isAddedtoWishlist: (id: number) => boolean;
  // quickViewItem: Product;
  // wishList: number[];
  // setQuickViewItem: React.Dispatch<React.SetStateAction<Product>>;
  isDark: boolean;
  handleToggle: () => void;
}

const DataContext = createContext<ContextProps | undefined>(undefined);

export const useContextElement = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useContextElement must be used within a ContextProvider");
  }
  return context;
};

interface ContextProviderProps {
  children: ReactNode;
}

export default function Context({ children }: ContextProviderProps) {
  const pathname = usePathname();
  // const [cartProducts, setCartProducts] = useState<Product[]>([]);
  // const [wishList, setWishList] = useState<number[]>([]);
  // const [quickViewItem, setQuickViewItem] = useState(products[0]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [isDark, setIsDark] = useState(true);

  // useEffect(() => {
  //   const subtotal = cartProducts.reduce((acc, product) => acc + product.quantity * product.price, 0);
  //   setTotalPrice(subtotal);
  // }, [cartProducts]);

  useEffect(() => {
    // const items = JSON.parse(localStorage.getItem("cartList") || "[]");
    // if (items.length) setCartProducts(items);

    // const wishlistItems = JSON.parse(localStorage.getItem("wishlist") || "[]");
    // if (wishlistItems.length) setWishList(wishlistItems);

    const savedDarkMode = JSON.parse(localStorage.getItem("isDark") || "false");
    setIsDark(savedDarkMode);
    toggleDark(savedDarkMode);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("cartList", JSON.stringify(cartProducts));
  // }, [cartProducts]);

  // useEffect(() => {
  //   localStorage.setItem("wishlist", JSON.stringify(wishList));
  // }, [wishList]);

  // const addProductToCart = (id: number) => {
  //   if (!cartProducts.some((product) => product.id === id)) {
  //     const product = products.find((p) => p.id === id);
  //     if (product) {
  //       setCartProducts((prev) => [...prev, { ...product, quantity: 1 }]);
  //       openCart();
  //     }
  //   }
  // };

  // const isAddedToCartProducts = (id: number) => cartProducts.some((product) => product.id === id);

  // const toggleWishlist = (id: number) => {
  //   setWishList((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  // };

  // const isAddedtoWishlist = (id: number) => wishList.includes(id);

  const toggleDark = (value: boolean) => {
    document.documentElement.classList.toggle("uc-dark", value);
  };

  const handleToggle = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    localStorage.setItem("isDark", JSON.stringify(newValue));
    toggleDark(newValue);
  };

  useEffect(() => {
    const pageWrapper = document.querySelector(".page-wrapper");
    if (pageWrapper) {
      pageWrapper.classList.toggle("uc-dark", isDark);
    }
  }, [pathname, isDark]);

  const contextValue: ContextProps = {
    // cartProducts,
    // setCartProducts,
    // totalPrice,
    // addProductToCart,
    // isAddedToCartProducts,
    // toggleWishlist,
    // isAddedtoWishlist,
    // quickViewItem,
    // wishList,
    // setQuickViewItem,
    isDark,
    handleToggle,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
}
