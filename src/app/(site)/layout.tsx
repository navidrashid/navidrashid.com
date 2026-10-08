import { WhatsAppFloat } from "@/components/whatsapp-float";
import { RevampNav } from "./nav";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <RevampNav />
      {children}
      <WhatsAppFloat />
    </>
  );
}
