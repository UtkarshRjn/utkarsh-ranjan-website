import { Metadata } from "next";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe to get notified about new posts",
};

export default function SubscribePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">Stay in the Loop</h1>
        <p className="text-muted text-lg mb-8">
          Subscribe to my newsletter and get notified whenever I publish new
          content. No spam, unsubscribe anytime.
        </p>

        <div className="bg-card border border-border rounded-lg p-8">
          <SubscribeForm />
        </div>

        <p className="text-sm text-muted mt-6">
          Join other readers who get my latest articles delivered straight to
          their inbox.
        </p>
      </div>
    </div>
  );
}
