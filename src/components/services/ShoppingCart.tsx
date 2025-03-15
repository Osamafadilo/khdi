import React, { useState, useEffect } from "react";
import { useSettings } from "@/contexts/SettingsContext";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ShoppingCart as CartIcon, Trash2, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const ShoppingCart = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: ShoppingCartProps) => {
  const { isRTL } = useSettings();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <Drawer
      open={isOpen}
      onOpenChange={onClose}
      direction={isRTL ? "right" : "left"}
    >
      <DrawerContent className="h-[85vh]">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-2">
              <CartIcon className="h-5 w-5" />
              {isRTL ? "سلة التسوق" : "Shopping Cart"}
            </DrawerTitle>
            <DrawerDescription>
              {cartItems.length === 0
                ? isRTL
                  ? "سلة التسوق فارغة"
                  : "Your cart is empty"
                : isRTL
                  ? `${cartItems.length} منتجات في سلة التسوق`
                  : `${cartItems.length} items in your cart`}
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-0">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10">
                <CartIcon className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-gray-500">
                  {isRTL
                    ? "لا توجد منتجات في سلة التسوق"
                    : "No items in your cart"}
                </p>
                <Button variant="outline" onClick={onClose} className="mt-4">
                  {isRTL ? "متابعة التسوق" : "Continue Shopping"}
                </Button>
              </div>
            ) : (
              <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b pb-3"
                  >
                    <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm font-semibold">
                          {item.price.toLocaleString(
                            isRTL ? "ar-SA" : "en-US",
                            {
                              style: "currency",
                              currency: "SAR",
                            },
                          )}
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1),
                              )
                            }
                            className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-4">
              <div className="flex items-center justify-between py-3 border-t border-b">
                <span className="font-semibold">
                  {isRTL ? "المجموع" : "Total"}
                </span>
                <span className="font-bold">
                  {totalPrice.toLocaleString(isRTL ? "ar-SA" : "en-US", {
                    style: "currency",
                    currency: "SAR",
                  })}
                </span>
              </div>
            </div>
          )}

          <DrawerFooter>
            {cartItems.length > 0 && (
              <Button onClick={onCheckout} className="w-full">
                {isRTL ? "إتمام الطلب" : "Checkout"}
              </Button>
            )}
            <DrawerClose asChild>
              <Button variant="outline">{isRTL ? "إغلاق" : "Close"}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
