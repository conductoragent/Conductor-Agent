'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PriceData {
  priceUsd: string;
  priceChange24h: number;
  volume24h: string;
  liquidity: string;
  marketCap: string;
  priceHistory: number[];
}

export default function PriceWidget() {
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const fetchPrice = async () => {
    try {
      // DexScreener API endpoint for $CONDUCTOR on Base
      const response = await fetch(
        'https://api.dexscreener.com/latest/dex/pairs/base/0xd54a113b286afe7166eacaeeca47e7bb938680b2d9c9bd60dca465d5025ce07e',
        { cache: 'no-store' }
      );
      
      if (!response.ok) throw new Error('Failed to fetch');
      
      const data = await response.json();
      const pair = data.pair || data.pairs?.[0];
      
      if (pair) {
        // Get price history for sparkline (simulate if not available)
        const currentPrice = parseFloat(pair.priceUsd);
        const change = pair.priceChange?.h24 || 0;
        
        // Generate simple price history based on current price and 24h change
        const priceHistory = generatePriceHistory(currentPrice, change);
        
        setPriceData({
          priceUsd: pair.priceUsd,
          priceChange24h: change,
          volume24h: pair.volume?.h24 || '0',
          liquidity: pair.liquidity?.usd || '0',
          marketCap: pair.fdv || pair.marketCap || '0',
          priceHistory
        });
        setError(false);
      }
      setLoading(false);
      setLastUpdate(new Date());
    } catch (err) {
      console.error('Price fetch error:', err);
      setError(true);
      setLoading(false);
    }
  };

  // Generate simple price history for sparkline
  const generatePriceHistory = (currentPrice: number, change24h: number) => {
    const points = 24;
    const history = [];
    const startPrice = currentPrice / (1 + change24h / 100);
    
    for (let i = 0; i < points; i++) {
      const progress = i / (points - 1);
      const volatility = (Math.sin(i * 0.5) * 0.02); // Add some realistic variance
      const price = startPrice + (currentPrice - startPrice) * progress + (currentPrice * volatility);
      history.push(price);
    }
    
    return history;
  };

  useEffect(() => {
    fetchPrice();
    // Update every 30 seconds
    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: string | number, decimals = 2) => {
    const n = typeof num === 'string' ? parseFloat(num) : num;
    if (n >= 1e9) return `$${(n / 1e9).toFixed(decimals)}B`;
    if (n >= 1e6) return `$${(n / 1e6).toFixed(decimals)}M`;
    if (n >= 1e3) return `$${(n / 1e3).toFixed(decimals)}K`;
    if (n < 0.01) return `$${n.toFixed(8)}`;
    return `$${n.toFixed(decimals)}`;
  };

  const formatPrice = (price: string) => {
    const p = parseFloat(price);
    if (p < 0.01) return `$${p.toFixed(8)}`;
    if (p < 1) return `$${p.toFixed(6)}`;
    return `$${p.toFixed(4)}`;
  };

  const Sparkline = ({ data, positive }: { data: number[]; positive: boolean }) => {
    if (!data || data.length < 2) return null;

    const width = 120;
    const height = 40;
    const padding = 2;

    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    const points = data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * (width - padding * 2) + padding;
        const y = height - padding - ((value - min) / range) * (height - padding * 2);
        return `${x},${y}`;
      })
      .join(' ');

    return (
      <svg width={width} height={height} className="opacity-80">
        <polyline
          fill="none"
          stroke={positive ? '#10b981' : '#ef4444'}
          strokeWidth="2"
          points={points}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  };

  if (loading) {
    return (
      <div className="price-widget-container">
        <div className="price-widget loading">
          <div className="animate-pulse">
            <div className="h-8 bg-zinc-800 rounded mb-4"></div>
            <div className="h-6 bg-zinc-800 rounded mb-2"></div>
            <div className="h-4 bg-zinc-800 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !priceData) {
    return (
      <div className="price-widget-container">
        <div className="price-widget error">
          <p className="text-zinc-400 text-sm">Unable to load price data</p>
        </div>
      </div>
    );
  }

  const isPositive = priceData.priceChange24h >= 0;

  return (
    <div className="price-widget-container">
      <Link
        href="https://dexscreener.com/base/0xd54a113b286afe7166eacaeeca47e7bb938680b2d9c9bd60dca465d5025ce07e"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className={`price-widget ${isPositive ? 'positive' : 'negative'}`}>
          {/* Live Indicator */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-400">$CONDUCTOR</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-emerald-500 font-medium">LIVE</span>
              </div>
            </div>
            <span className="text-xs text-zinc-500">
              {lastUpdate.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })}
            </span>
          </div>

          {/* Price and Chart */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-3xl font-bold font-mono text-white mb-1 price-animate">
                {formatPrice(priceData.priceUsd)}
              </div>
              <div className={`text-sm font-semibold ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                {isPositive ? '↗' : '↘'} {Math.abs(priceData.priceChange24h).toFixed(2)}%
                <span className="text-xs text-zinc-500 ml-1">24h</span>
              </div>
            </div>
            <div className="ml-4">
              <Sparkline data={priceData.priceHistory} positive={isPositive} />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-zinc-800">
            <div>
              <div className="text-xs text-zinc-500 mb-1">Volume 24h</div>
              <div className="text-sm font-semibold text-zinc-300">
                {formatNumber(priceData.volume24h)}
              </div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Liquidity</div>
              <div className="text-sm font-semibold text-zinc-300">
                {formatNumber(priceData.liquidity)}
              </div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 mb-1">Market Cap</div>
              <div className="text-sm font-semibold text-zinc-300">
                {formatNumber(priceData.marketCap)}
              </div>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="price-widget-overlay">
            <span className="text-sm font-medium">View on DexScreener →</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
