"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  Home,
  Layout,
  Settings,
} from "lucide-react";
import { Div } from "../template/index";
import { cn } from "@/lib/utils";
import { 
  AccordionContent,
  AccordionItem, 
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import { NavItems } from "@/components/NavItems";

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  onExpand: (id: string) => void;
};

export const NavItem = ({
  isExpanded,
  isActive,
  onExpand,
}: NavItemProps) => {
  const { user } = useContext(UserContext);

  return (
    <AccordionItem
      value={user.id}
      className="border-none"
    >
      <AccordionTrigger
        onClick={() => onExpand(user.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <Div className="flex items-center gap-x-2">
          <Div className="w-7 h-7 relative">
            <Image
              fill
              src={user.avatar}
              alt="User avatar"
              className="rounded-sm object-cover"
            />
          </Div>
          <span className="font-medium text-sm">
            {user.name}
          </span>
        </Div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        <NavItems />
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <Div className="flex items-center gap-x-2">
      <Div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </Div>
      <Skeleton className="h-10 w-full" />
    </Div>
  );
};
