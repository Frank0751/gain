"use client";

import * as React from "react";
import { Twitter, Facebook, Linkedin, Link2, Check, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ORG } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  title: string;
  excerpt?: string;
  slug?: string;
}

export function SocialShare({ title, excerpt, slug }: SocialShareProps) {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    if (slug) {
      setUrl(`${window.location.origin}/blog/${slug}`);
    } else {
      setUrl(window.location.href);
    }
  }, [slug]);

  const shareText = excerpt ? `${title} - ${excerpt}` : title;

  const shareOnX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}&via=Gainghana`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "Link copied", description: "Blog post link copied to clipboard." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Could not copy", variant: "destructive" });
    }
  };

  const nativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text: excerpt, url });
      } else {
        copyLink();
      }
    } catch {
      // User cancelled
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-foreground">Share this post:</p>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={shareOnX}
          className="gap-2"
          aria-label="Share on X (Twitter)"
        >
          <Twitter className="size-4" />
          <span className="hidden sm:inline">Tweet</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={shareOnFacebook}
          className="gap-2"
          aria-label="Share on Facebook"
        >
          <Facebook className="size-4" />
          <span className="hidden sm:inline">Share</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={shareOnLinkedIn}
          className="gap-2"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="size-4" />
          <span className="hidden sm:inline">Post</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={copyLink}
          className="gap-2"
          aria-label="Copy link to clipboard"
        >
          {copied ? <Check className="size-4 text-primary" /> : <Link2 className="size-4" />}
          <span className="hidden sm:inline">{copied ? "Copied" : "Copy Link"}</span>
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={nativeShare}
          className="gap-2"
          aria-label="Share via device"
        >
          <Share2 className="size-4" />
          <span className="hidden sm:inline">Share</span>
        </Button>
      </div>
    </div>
  );
}
