import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./mode-toggle";

export function TopBar() {
  return (
    <div className="flex h-12 items-center justify-between border-b bg-zinc-900 px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <ModeToggle />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-zinc-100">
          <span className="text-sm">Testing (Pers...</span>
          <Separator orientation="vertical" className="h-4 bg-zinc-700" />
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-emerald-600 text-xs font-medium">
              T
            </div>
            <span className="text-sm">Untitled Zap</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-6 border-zinc-700 bg-transparent text-xs font-normal text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
          >
            Draft
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-zinc-100">110%</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-zinc-100"
            >
              <HelpCircle className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Help Center</DropdownMenuItem>
            <DropdownMenuItem>Keyboard Shortcuts</DropdownMenuItem>
            <DropdownMenuItem>Contact Support</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
