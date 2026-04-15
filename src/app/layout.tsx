import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mamouda Ndam Biofil",
  description:
    "Solutions sanitaires écologiques Biofil au Cameroun: installation, accompagnement et devis gratuit.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
