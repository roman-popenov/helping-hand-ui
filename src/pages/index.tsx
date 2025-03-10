import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from 'react';
import vc from './vc.json';
import id from './id.json';
import { CheckCircle } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useRouter } from 'next/router';

// Add this at the top of the component to make external links more secure
const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer"
};

const Home: NextPage = () => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);  

  const handleLendAHand = () => {
    if (!isVerified) {
      router.push('/verify');
      return;
    }
    router.push('/helprequest');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Head>
        <title>Helping Hand - Crowd Funding on Blockchain</title>
        <meta
          content="A platform for crowdfunding on blockchain"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Navigation isVerified={isVerified} onAskForHelp={handleLendAHand} />

      <main className="container mx-auto p-8 max-w-4xl">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-16 py-12 px-4">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-6 bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-transparent animate-fade-in">
            Welcome to Helping Hand
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your fundraising platform on blockchain.
          </p>
        </div>

        <div className="text-center mb-16 py-12 px-4">
          <Button 
            variant="destructive" 
            onClick={handleLendAHand}
          >
            Ask for Help
          </Button>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
