import {
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  pixelBasedPreset,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

function BaseEmail({ preview, children }: { preview: string; children: ReactNode }) {
  return (
    <Html>
      <Preview>{preview}</Preview>
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {},
        }}
      >
        <Head />
        <Container className="mx-auto px-4 py-8">{children}</Container>
      </Tailwind>
    </Html>
  );
}

export function EmailMagicLinkTemplate({ magicLink, preview = false }: { magicLink: string; preview?: boolean }) {
  const content = (
    <>
      <Section className="mb-8 text-center">
        <Heading className="mb-4 font-bold text-2xl text-brand">Login to SaaSKey</Heading>
        <Text className="mb-6 text-gray-700">Click the button below to securely log in to your account.</Text>
      </Section>

      <Section className="mb-8 text-center">
        <Button className="rounded-lg bg-black px-6 py-3 font-medium text-white" href={magicLink}>
          Click to login
        </Button>
      </Section>

      <Hr className="mb-6 border-gray-200" />

      <Section className="text-center">
        <Text className="text-gray-500 text-sm">If you did not request this login, please ignore this email.</Text>
      </Section>
    </>
  );

  if (preview) {
    return <div className="mx-auto rounded-lg border bg-white p-8 shadow-sm">{content}</div>;
  }
  return <BaseEmail preview="Your login link for SaaSKey">{content}</BaseEmail>;
}
