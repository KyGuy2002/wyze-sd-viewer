import DayItem from "@/components/DayItem";
import { Separator } from "@/components/ui/separator"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { MetaFunction } from "@remix-run/cloudflare";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const meta: MetaFunction = () => {
  return [
    { title: "Wyze SD Viewer" },
    {
      name: "description",
      content: "An unnoffical viewer for Wyze SD cards.",
    },
  ];
};

export default function Index() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full max-h-dvh min-h-dvh p-7"
    >
      <ResizablePanel defaultSize={15} className="p-2">
        <ScrollArea className="rounded-md border h-full p-2">
          <div className="flex flex-col">
            
            {[...Array(10)].map((i) => <>
              <DayItem/>
              {/* TODO hide last seperator */}
              <Separator className="my-2"/>
            </>)}

          </div>
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle className="opacity-0"/>
      <ResizablePanel defaultSize={85}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={80} className="p-2">
            
            <AspectRatio ratio={16 / 9}>
              <img className="w-full rounded-md border" src="/thumbnails/1.jpg"/>
            </AspectRatio>

          </ResizablePanel>
          <ResizableHandle className="opacity-0"/>
          <ResizablePanel defaultSize={20} className="p-2">

            <div className="rounded-md border h-full relative">

              

              <div className="absolute top-0 bottom-0 h-full left-1/2 transform -translate-x-1/2 bg-red-600 w-1"/>

            </div>

          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
