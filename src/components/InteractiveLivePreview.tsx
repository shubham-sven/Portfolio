import React, { useState, useEffect, useMemo } from 'react';
import { Project } from '../types';
import { 
  Globe, Shield, RefreshCw, Zap, Flame, Snowflake, Sparkles, 
  TrendingUp, Play, CheckCircle2, Sliders, Terminal, Cpu,
  AlertTriangle, PhoneCall, Mail, MapPin, QrCode, Mic, Radio,
  Upload, Image, Tag, Eye, Lock, Key, BarChart3, Binary,
  BookOpen, Search, Bookmark, Ticket, CreditCard, DollarSign,
  Palette, Layers, ChevronRight, Check, Star, ArrowRight,
  Send, Users, Database, FileText, ArrowDownLeft, ArrowUpRight
} from 'lucide-react';

interface InteractiveLivePreviewProps {
  project: Project;
}

export const InteractiveLivePreview: React.FC<InteractiveLivePreviewProps> = ({ project }) => {
  // ==========================================
  // 1. WOMEN SAFETY APP STATE
  // ==========================================
  const [sosActive, setSosActive] = useState(false);
  const [sosCountdown, setSosCountdown] = useState(3);
  const [alertDispatched, setAlertDispatched] = useState(false);
  const [coords, setCoords] = useState({ lat: 28.6139, lng: 77.2090 });
  const [socketLatency, setSocketLatency] = useState(24);
  const [showQrCard, setShowQrCard] = useState(false);
  const [voiceInput, setVoiceInput] = useState('Emergency! I feel in danger, please track my location immediately.');
  const [isAnalyzingVoice, setIsAnalyzingVoice] = useState(false);
  const [sentimentScore, setSentimentScore] = useState<number | null>(0.94);
  const [dispatchLogs, setDispatchLogs] = useState<string[]>([
    '[Socket.IO] Client connected to emergency telemetry room #safe-9921',
    '[GPS Engine] Continuous geolocation polling active (accuracy: 3.2m)',
    '[Twilio SMS] Emergency circle configured: Mother (+91-98765...), Brother (+91-98123...)',
    '[Nodemailer] Fallback SMTP transporter initialized.'
  ]);

  const triggerSos = () => {
    if (sosActive) {
      setSosActive(false);
      setAlertDispatched(false);
      setSosCountdown(3);
      return;
    }
    setSosActive(true);
    setSosCountdown(3);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (sosActive && !alertDispatched) {
      if (sosCountdown > 0) {
        timer = setTimeout(() => setSosCountdown(prev => prev - 1), 1000);
      } else {
        setAlertDispatched(true);
        setDispatchLogs(prev => [
          `[CRITICAL ALERT] SOS Broadcast dispatched at ${new Date().toLocaleTimeString()}`,
          `[Socket.IO] Real-time coordinates streamed: Lat ${coords.lat.toFixed(4)}, Lng ${coords.lng.toFixed(4)}`,
          `[Twilio API] SMS delivered to 2 emergency contacts with live tracking link`,
          `[Nodemailer] High-priority email dispatched to authorities & trusted circle`,
          ...prev
        ]);
      }
    }
    return () => clearTimeout(timer);
  }, [sosActive, sosCountdown, alertDispatched, coords]);

  const analyzeVoiceSentiment = () => {
    setIsAnalyzingVoice(true);
    setTimeout(() => {
      const lower = voiceInput.toLowerCase();
      const distressKeywords = ['help', 'danger', 'emergency', 'unsafe', 'followed', 'attack', 'stop'];
      const matches = distressKeywords.filter(kw => lower.includes(kw));
      const score = matches.length > 0 ? Math.min(0.98, 0.65 + matches.length * 0.12) : 0.15;
      setSentimentScore(score);
      setIsAnalyzingVoice(false);
      if (score >= 0.75) {
        setDispatchLogs(prev => [
          `[AI Voice Analysis] Panic detected (Distress Confidence: ${(score * 100).toFixed(0)}%) — Auto-triggering SOS alerts!`,
          ...prev
        ]);
        setSosActive(true);
      }
    }, 600);
  };

  // ==========================================
  // 2. LIBRARY MANAGEMENT SYSTEM STATE
  // ==========================================
  const [librarySearch, setLibrarySearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [libraryBooks, setLibraryBooks] = useState([
    { id: 'b1', title: 'Clean Code: A Handbook of Agile Software', author: 'Robert C. Martin', genre: 'Software', available: 3, total: 5, borrowed: 2 },
    { id: 'b2', title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Gang of Four', genre: 'Computer Science', available: 1, total: 4, borrowed: 3 },
    { id: 'b3', title: 'Introduction to Algorithms (CLRS)', author: 'Cormen, Leiserson, Rivest', genre: 'Algorithms', available: 4, total: 6, borrowed: 2 },
    { id: 'b4', title: 'You Don’t Know JS: Scope & Closures', author: 'Kyle Simpson', genre: 'JavaScript', available: 2, total: 3, borrowed: 1 }
  ]);
  const [libraryLogs, setLibraryLogs] = useState<string>('Ready for REST API dispatch');

  const filteredLibraryBooks = useMemo(() => {
    return libraryBooks.filter(b => {
      const matchesSearch = b.title.toLowerCase().includes(librarySearch.toLowerCase()) || 
                            b.author.toLowerCase().includes(librarySearch.toLowerCase());
      const matchesGenre = selectedGenre === 'All' || b.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });
  }, [libraryBooks, librarySearch, selectedGenre]);

  const handleBorrowBook = (id: string, title: string) => {
    setLibraryBooks(prev => prev.map(b => {
      if (b.id === id && b.available > 0) {
        return { ...b, available: b.available - 1, borrowed: b.borrowed + 1 };
      }
      return b;
    }));
    setLibraryLogs(`POST /api/v1/loans/checkout → 200 OK: Issued "${title}" to User #USR-842`);
  };

  const handleReturnBook = (id: string, title: string) => {
    setLibraryBooks(prev => prev.map(b => {
      if (b.id === id && b.borrowed > 0) {
        return { ...b, available: b.available + 1, borrowed: b.borrowed - 1 };
      }
      return b;
    }));
    setLibraryLogs(`PUT /api/v1/loans/return → 200 OK: Checked in "${title}" (Inventory Restocked)`);
  };

  // ==========================================
  // 3. DIGITAL ART MARKETPLACE STATE
  // ==========================================
  const [activeArtTab, setActiveArtTab] = useState<'Home' | 'Browse' | 'Artists' | 'Collections' | 'Upload'>('Browse');
  const [selectedArtCategory, setSelectedArtCategory] = useState('All');
  const [newArtTitle, setNewArtTitle] = useState('Neo Tokyo Cyber Dreams');
  const [newArtArtist, setNewArtArtist] = useState('Shubham Sven');
  const [newArtTag, setNewArtTag] = useState('Cyberpunk');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [artworks, setArtworks] = useState([
    { id: 1, title: 'Ethereal Geometry #01', artist: 'Elena Vance', tag: '3D Render', price: '1.4 ETH', likes: 142, img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'Quantum Solitude', artist: 'Marcus Chen', tag: 'Abstract', price: '0.85 ETH', likes: 89, img: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'Neon Horizon 2099', artist: 'Aria Takahashi', tag: 'Cyberpunk', price: '2.1 ETH', likes: 230, img: 'https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?auto=format&fit=crop&w=400&q=80' }
  ]);

  const handleUploadArtwork = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArtTitle.trim()) return;
    const newArt = {
      id: Date.now(),
      title: newArtTitle,
      artist: newArtArtist || 'Anonymous',
      tag: newArtTag,
      price: '1.25 ETH',
      likes: 1,
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80'
    };
    setArtworks([newArt, ...artworks]);
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      setActiveArtTab('Browse');
    }, 1200);
  };

  const filteredArtworks = useMemo(() => {
    if (selectedArtCategory === 'All') return artworks;
    return artworks.filter(a => a.tag === selectedArtCategory);
  }, [artworks, selectedArtCategory]);

  // ==========================================
  // 4. PROJECT-BOOKING / NA-NI TICKETS STATE
  // ==========================================
  const [selectedEvent, setSelectedEvent] = useState('Tech Innovators Summit 2026');
  const [seatTier, setSeatTier] = useState<'VIP' | 'Premium' | 'General'>('Premium');
  const [ticketCount, setTicketCount] = useState(2);
  const [attendeeName, setAttendeeName] = useState('Shubham Kumar');

  const tierPrices = { VIP: 120, Premium: 65, General: 30 };
  const subtotal = tierPrices[seatTier] * ticketCount;
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  // ==========================================
  // 5. BOOKS INVENTORY / READING TRACKER STATE
  // ==========================================
  const [readingList, setReadingList] = useState([
    { id: 1, title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', status: 'In Progress', rating: 5, pages: 616 },
    { id: 2, title: 'Pragmatic Programmer: 20th Anniversary', author: 'David Thomas, Andrew Hunt', status: 'Completed', rating: 5, pages: 352 },
    { id: 3, title: 'Grokking Algorithms: Illustrated Guide', author: 'Aditya Bhargava', status: 'Completed', rating: 4, pages: 256 },
    { id: 4, title: 'Cracking the Coding Interview', author: 'Gayle Laakmann McDowell', status: 'Want to Read', rating: 5, pages: 687 }
  ]);

  const toggleBookStatus = (id: number) => {
    setReadingList(prev => prev.map(b => {
      if (b.id === id) {
        const nextStatus = b.status === 'Want to Read' ? 'In Progress' : b.status === 'In Progress' ? 'Completed' : 'Want to Read';
        return { ...b, status: nextStatus };
      }
      return b;
    }));
  };

  // ==========================================
  // 6. ATM SIMULATOR STATE
  // ==========================================
  const [enteredPin, setEnteredPin] = useState('');
  const [atmAuthenticated, setAtmAuthenticated] = useState(false);
  const [atmScreen, setAtmScreen] = useState<'PIN' | 'MENU' | 'WITHDRAW' | 'DEPOSIT' | 'STATEMENT' | 'SUCCESS'>('PIN');
  const [atmBalance, setAtmBalance] = useState(24500);
  const [depositAmount, setDepositAmount] = useState(1000);
  const [atmMessage, setAtmMessage] = useState('');
  const [denominations, setDenominations] = useState<{ n500: number; n200: number; n100: number }>({ n500: 4, n200: 0, n100: 0 });
  const [atmTransactions, setAtmTransactions] = useState([
    { id: 1, type: 'DEPOSIT', amount: 5000, date: '2026-03-01 10:24', balance: 24500 },
    { id: 2, type: 'WITHDRAW', amount: 1500, date: '2026-02-28 16:40', balance: 19500 }
  ]);

  const handleAtmPinSubmit = () => {
    if (enteredPin === '1234' || enteredPin === '0000') {
      setAtmAuthenticated(true);
      setAtmScreen('MENU');
      setAtmMessage('');
    } else {
      setAtmMessage('Invalid PIN. Use 1234 for sandbox.');
      setEnteredPin('');
    }
  };

  const handleAtmWithdraw = (amt: number) => {
    if (amt > atmBalance) {
      setAtmMessage('Insufficient funds.');
      return;
    }
    let rem = amt;
    const n500 = Math.floor(rem / 500);
    rem %= 500;
    const n200 = Math.floor(rem / 200);
    rem %= 200;
    const n100 = Math.floor(rem / 100);

    setDenominations({ n500, n200, n100 });
    const newBal = atmBalance - amt;
    setAtmBalance(newBal);
    setAtmTransactions(prev => [
      { id: Date.now(), type: 'WITHDRAW', amount: amt, date: new Date().toLocaleTimeString(), balance: newBal },
      ...prev
    ]);
    setAtmScreen('SUCCESS');
    setAtmMessage(`Dispensed ₹${amt} successfully!`);
  };

  const handleAtmDeposit = (amt: number) => {
    if (amt <= 0) return;
    const newBal = atmBalance + amt;
    setAtmBalance(newBal);
    setAtmTransactions(prev => [
      { id: Date.now(), type: 'DEPOSIT', amount: amt, date: new Date().toLocaleTimeString(), balance: newBal },
      ...prev
    ]);
    setAtmScreen('SUCCESS');
    setAtmMessage(`Deposited ₹${amt} into account.`);
  };

  // ==========================================
  // 7. STUDIO AGENCY STATE
  // ==========================================
  const [studioColorTheme, setStudioColorTheme] = useState<'amber' | 'emerald' | 'violet'>('amber');

  // ==========================================
  // 8. VIGENERE CRYPTANALYSIS STATE
  // ==========================================
  const [plainText, setPlainText] = useState('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG AND ATTACKS AT DAWN');
  const [cipherKey, setCipherKey] = useState('KASISKI');

  const cipherText = useMemo(() => {
    const cleanText = plainText.toUpperCase().replace(/[^A-Z]/g, '');
    const cleanKey = cipherKey.toUpperCase().replace(/[^A-Z]/g, '') || 'A';
    let result = '';
    for (let i = 0; i < cleanText.length; i++) {
      const p = cleanText.charCodeAt(i) - 65;
      const k = cleanKey.charCodeAt(i % cleanKey.length) - 65;
      const c = (p + k) % 26;
      result += String.fromCharCode(c + 65);
    }
    return result;
  }, [plainText, cipherKey]);

  const letterFrequencies = useMemo(() => {
    const counts: Record<string, number> = {};
    for (let i = 65; i <= 90; i++) {
      counts[String.fromCharCode(i)] = 0;
    }
    const clean = cipherText.replace(/[^A-Z]/g, '');
    for (const char of clean) {
      if (counts[char] !== undefined) counts[char]++;
    }
    const total = clean.length || 1;
    return Object.entries(counts).map(([letter, count]) => ({
      letter,
      pct: ((count / total) * 100).toFixed(1)
    }));
  }, [cipherText]);

  return (
    <div className="rounded-xl border border-white/10 bg-[#1E2230] p-4 md:p-6 overflow-hidden">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F7B52B] animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-[#F7B52B] uppercase font-bold">
            Live Sandbox Simulation
          </span>
        </div>
        <span className="text-xs text-[#A6A9B5] font-mono">
          Interactive Engineering Sandbox
        </span>
      </div>

      {/* 1. WOMEN SAFETY APP */}
      {project.interactiveType === 'women-safety' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Socket.IO Stream</span>
              <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                Connected • {socketLatency}ms
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Live GPS Telemetry</span>
              <span className="text-xs font-mono text-[#F5F5F2] mt-1 block font-medium">
                Lat {coords.lat.toFixed(4)}, Lng {coords.lng.toFixed(4)}
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Emergency Dispatch</span>
              <span className={`text-xs font-semibold mt-1 flex items-center gap-1.5 ${alertDispatched ? 'text-red-400' : 'text-[#F7B52B]'}`}>
                {alertDispatched ? '🚨 SOS ACTIVE & BROADCASTING' : '✓ Standing By'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#171A25] p-5 rounded-lg border border-white/5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#F5F5F2] flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    Instant 1-Tap SOS Trigger
                  </span>
                  <button
                    onClick={() => setShowQrCard(!showQrCard)}
                    className="text-[11px] font-mono text-[#F7B52B] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    {showQrCard ? 'Hide QR Card' : 'View Safety QR'}
                  </button>
                </div>
                <p className="text-xs text-[#A6A9B5] leading-relaxed">
                  Triggering SOS emits coordinates to Socket.IO room, dispatches Twilio SMS alerts to contacts, and sends emergency emails via Nodemailer.
                </p>
              </div>

              <div className="text-center py-2">
                <button
                  onClick={triggerSos}
                  className={`w-32 h-32 rounded-full font-bold text-lg tracking-wider transition-all duration-300 shadow-2xl flex flex-col items-center justify-center mx-auto border-4 cursor-pointer ${
                    alertDispatched
                      ? 'bg-red-600 border-red-400 text-white animate-pulse shadow-red-500/50'
                      : sosActive
                      ? 'bg-amber-500 border-amber-300 text-white animate-bounce'
                      : 'bg-gradient-to-br from-red-500 to-rose-700 hover:from-red-600 hover:to-rose-800 border-red-300/40 text-white hover:scale-105 shadow-red-900/40'
                  }`}
                >
                  <AlertTriangle className="w-7 h-7 mb-1" />
                  <span>{alertDispatched ? 'DISPATCHED' : sosActive ? `CANCEL (${sosCountdown}s)` : 'HOLD SOS'}</span>
                </button>
                <span className="text-[11px] text-[#A6A9B5] font-mono mt-2 block">
                  {alertDispatched ? 'Broadcasting live to police & contacts' : 'Press to trigger emergency sequence'}
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A6A9B5] flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-[#38BDF8]" />
                    AI Panic Voice Sentinel
                  </span>
                  {sentimentScore !== null && (
                    <span className={`font-mono font-semibold ${sentimentScore >= 0.75 ? 'text-red-400' : 'text-emerald-400'}`}>
                      Confidence: {(sentimentScore * 100).toFixed(0)}% ({sentimentScore >= 0.75 ? 'PANIC DETECTED' : 'Calm'})
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={voiceInput}
                    onChange={e => setVoiceInput(e.target.value)}
                    className="flex-1 bg-[#252A39] border border-white/10 rounded px-2.5 py-1.5 text-xs text-[#F5F5F2] font-mono focus:border-[#F7B52B] outline-none"
                    placeholder="Enter spoken phrase..."
                  />
                  <button
                    onClick={analyzeVoiceSentiment}
                    disabled={isAnalyzingVoice}
                    className="px-3 py-1.5 bg-[#252A39] hover:bg-[#F7B52B] hover:text-[#0D0F17] text-white text-xs font-mono rounded border border-white/10 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {isAnalyzingVoice ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
                    Analyze
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#171A25] p-5 rounded-lg border border-white/5 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-semibold text-[#F5F5F2] flex items-center gap-2 mb-2">
                  <Radio className="w-4 h-4 text-emerald-400" />
                  Live Event Telemetry Log
                </span>
                <div className="bg-[#0D0F17] p-3 rounded border border-white/5 font-mono text-[11px] space-y-1.5 max-h-56 overflow-y-auto">
                  {dispatchLogs.map((log, i) => (
                    <div key={i} className={`leading-relaxed ${log.includes('CRITICAL') ? 'text-red-400 font-bold' : log.includes('Socket.IO') ? 'text-[#38BDF8]' : 'text-[#A6A9B5]'}`}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              {showQrCard && (
                <div className="bg-[#252A39] p-3 rounded-lg border border-[#F7B52B]/30 flex items-center gap-3">
                  <div className="w-14 h-14 bg-white rounded p-1 flex items-center justify-center shrink-0">
                    <QrCode className="w-12 h-12 text-black" />
                  </div>
                  <div className="text-xs">
                    <h5 className="font-bold text-[#F5F5F2]">Dynamic Safety ID Card</h5>
                    <p className="text-[11px] text-[#A6A9B5] mt-0.5">Scanned by first responders for blood group (O+), emergency contacts, and medical alerts.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. LIBRARY MANAGEMENT SYSTEM */}
      {project.interactiveType === 'library-system' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Cloud Backend</span>
              <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Vercel Serverless • Active
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Catalog Index</span>
              <span className="text-xs font-mono text-[#F5F5F2] mt-1 block font-medium">
                {libraryBooks.reduce((acc, b) => acc + b.total, 0)} Total Copies Indexed
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Active Borrowed</span>
              <span className="text-sm font-mono text-[#38BDF8] mt-1 block font-bold">
                {libraryBooks.reduce((acc, b) => acc + b.borrowed, 0)} Books on Loan
              </span>
            </div>
          </div>

          <div className="bg-[#171A25] p-4 rounded-lg border border-white/5 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A6A9B5]" />
                <input
                  type="text"
                  value={librarySearch}
                  onChange={e => setLibrarySearch(e.target.value)}
                  placeholder="Search title, author or ISBN..."
                  className="w-full bg-[#252A39] border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#F5F5F2] font-mono focus:border-[#38BDF8] outline-none"
                />
              </div>
              <div className="flex gap-1.5 flex-wrap w-full sm:w-auto">
                {['All', 'Software', 'Algorithms', 'Computer Science', 'JavaScript'].map(genre => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-2.5 py-1 text-xs rounded font-mono transition-all cursor-pointer ${
                      selectedGenre === genre ? 'bg-[#38BDF8] text-black font-bold' : 'bg-[#252A39] text-[#A6A9B5] hover:text-white'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredLibraryBooks.map(book => (
                <div key={book.id} className="bg-[#252A39] p-3.5 rounded-lg border border-white/5 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-[#F5F5F2] leading-snug">{book.title}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#38BDF8] shrink-0">
                        {book.genre}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A6A9B5] mt-1 font-mono">By {book.author}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="text-[11px] font-mono">
                      <span className="text-emerald-400 font-bold">{book.available} Available</span>
                      <span className="text-[#A6A9B5] ml-1.5">({book.borrowed} Checked out)</span>
                    </div>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => handleBorrowBook(book.id, book.title)}
                        disabled={book.available === 0}
                        className="px-2.5 py-1 text-[11px] bg-[#38BDF8] hover:bg-[#38BDF8]/90 disabled:opacity-40 text-black font-mono font-bold rounded cursor-pointer"
                      >
                        Borrow
                      </button>
                      <button
                        onClick={() => handleReturnBook(book.id, book.title)}
                        disabled={book.borrowed === 0}
                        className="px-2.5 py-1 text-[11px] bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white font-mono rounded cursor-pointer"
                      >
                        Return
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0D0F17] p-2.5 rounded border border-white/5 font-mono text-[11px] flex items-center justify-between flex-wrap gap-2">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                {libraryLogs}
              </span>
              <a 
                href="https://library-management-system-express.vercel.app" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#38BDF8] hover:underline flex items-center gap-1 text-[11px]"
              >
                Open Live Vercel App <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. DIGITAL ART MARKETPLACE */}
      {project.interactiveType === 'art-marketplace' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex gap-2">
              {(['Browse', 'Upload', 'Artists', 'Collections'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveArtTab(tab)}
                  className={`px-3 py-1 text-xs rounded-md font-mono transition-all cursor-pointer ${
                    activeArtTab === tab 
                      ? 'bg-[#A855F7] text-white font-semibold shadow-lg shadow-purple-900/40' 
                      : 'text-[#A6A9B5] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              DOM Router Active
            </span>
          </div>

          {activeArtTab === 'Upload' ? (
            <form onSubmit={handleUploadArtwork} className="bg-[#171A25] p-4 rounded-lg border border-white/5 space-y-3">
              <span className="text-xs font-semibold text-[#F5F5F2] flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#A855F7]" />
                Simulate Artwork Upload (upload.js Module)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] text-[#A6A9B5] font-mono block mb-1">Artwork Title</label>
                  <input
                    type="text"
                    value={newArtTitle}
                    onChange={e => setNewArtTitle(e.target.value)}
                    className="w-full bg-[#252A39] border border-white/10 rounded p-2 text-xs text-[#F5F5F2] font-mono focus:border-[#A855F7] outline-none"
                    placeholder="Title"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#A6A9B5] font-mono block mb-1">Creator Name</label>
                  <input
                    type="text"
                    value={newArtArtist}
                    onChange={e => setNewArtArtist(e.target.value)}
                    className="w-full bg-[#252A39] border border-white/10 rounded p-2 text-xs text-[#F5F5F2] font-mono focus:border-[#A855F7] outline-none"
                    placeholder="Artist"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#A6A9B5] font-mono block mb-1">Art Category</label>
                  <select
                    value={newArtTag}
                    onChange={e => setNewArtTag(e.target.value)}
                    className="w-full bg-[#252A39] border border-white/10 rounded p-2 text-xs text-[#F5F5F2] font-mono focus:border-[#A855F7] outline-none"
                  >
                    <option value="Cyberpunk">Cyberpunk</option>
                    <option value="Abstract">Abstract</option>
                    <option value="3D Render">3D Render</option>
                    <option value="Surreal">Surreal</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[11px] text-[#A6A9B5] font-mono">
                  {uploadSuccess ? '✓ Validated MIME & Published to DOM!' : 'Enforces client-side validation'}
                </span>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#A855F7] hover:bg-[#A855F7]/90 text-white font-mono text-xs rounded flex items-center gap-1.5 cursor-pointer font-bold"
                >
                  <Upload className="w-3.5 h-3.5" />
                  Publish Artwork
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {['All', 'Cyberpunk', 'Abstract', '3D Render'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedArtCategory(cat)}
                      className={`px-2.5 py-1 text-xs rounded font-mono transition-all cursor-pointer ${
                        selectedArtCategory === cat 
                          ? 'bg-white/20 text-white font-medium' 
                          : 'bg-[#252A39] text-[#A6A9B5] hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <span className="text-[11px] text-[#A6A9B5] font-mono">
                  Showing {filteredArtworks.length} items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {filteredArtworks.map(art => (
                  <div key={art.id} className="bg-[#171A25] rounded-lg overflow-hidden border border-white/5 group hover:border-[#A855F7]/40 transition-all">
                    <div className="h-32 overflow-hidden relative">
                      <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-[#A855F7]">
                        {art.tag}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-semibold text-[#F5F5F2] truncate">{art.title}</h4>
                      <div className="flex items-center justify-between mt-1 text-[11px] text-[#A6A9B5]">
                        <span>by {art.artist}</span>
                        <span className="font-mono text-emerald-400 font-semibold">{art.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. PROJECT-BOOKING / NA-NI TICKETS */}
      {project.interactiveType === 'event-booking' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#171A25] p-4 rounded-lg border border-white/5 space-y-3">
              <span className="text-xs font-semibold text-[#F5F5F2] flex items-center gap-2">
                <Ticket className="w-4 h-4 text-[#EC4899]" />
                Event Reservation Wizard
              </span>

              <div>
                <label className="text-[11px] text-[#A6A9B5] font-mono block mb-1">Featured Event</label>
                <select
                  value={selectedEvent}
                  onChange={e => setSelectedEvent(e.target.value)}
                  className="w-full bg-[#252A39] border border-white/10 rounded p-2 text-xs text-[#F5F5F2] font-mono focus:border-[#EC4899] outline-none"
                >
                  <option value="Tech Innovators Summit 2026">Tech Innovators Summit 2026</option>
                  <option value="Global Full-Stack Hackathon">Global Full-Stack Hackathon</option>
                  <option value="Cloud Architecture Expo">Cloud Architecture Expo</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] text-[#A6A9B5] font-mono block mb-1">Seat Tier</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['General', 'Premium', 'VIP'] as const).map(tier => (
                    <button
                      key={tier}
                      onClick={() => setSeatTier(tier)}
                      className={`p-2 rounded border text-xs font-mono flex flex-col items-center justify-center transition-all cursor-pointer ${
                        seatTier === tier 
                          ? 'border-[#EC4899] bg-[#EC4899]/10 text-white font-bold' 
                          : 'border-white/5 bg-[#252A39] text-[#A6A9B5]'
                      }`}
                    >
                      <span>{tier}</span>
                      <span className="text-[11px] text-[#EC4899] mt-0.5">${tierPrices[tier]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-[#A6A9B5] font-mono block mb-1">Tickets Count</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={ticketCount}
                    onChange={e => setTicketCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-[#252A39] border border-white/10 rounded p-2 text-xs text-[#F5F5F2] font-mono outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#A6A9B5] font-mono block mb-1">Attendee Name</label>
                  <input
                    type="text"
                    value={attendeeName}
                    onChange={e => setAttendeeName(e.target.value)}
                    className="w-full bg-[#252A39] border border-white/10 rounded p-2 text-xs text-[#F5F5F2] font-mono outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#171A25] p-4 rounded-lg border border-white/5 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-xs font-semibold text-[#F5F5F2] flex items-center gap-2 mb-2">
                  <CreditCard className="w-4 h-4 text-[#EC4899]" />
                  Live Digital Ticket Pass
                </span>
                
                <div className="bg-gradient-to-br from-[#252A39] to-[#171A25] p-4 rounded-xl border border-white/10 shadow-lg relative overflow-hidden">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#EC4899]">Na-Ni Official Pass</span>
                      <h4 className="text-sm font-bold text-white mt-0.5">{selectedEvent}</h4>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EC4899] text-white">
                      {seatTier}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#A6A9B5] py-2 border-y border-white/5">
                    <div>
                      <span className="text-[10px] block">Attendee</span>
                      <span className="text-white font-semibold">{attendeeName || 'Guest'}</span>
                    </div>
                    <div>
                      <span className="text-[10px] block">Quantity</span>
                      <span className="text-white font-semibold">{ticketCount} Ticket(s)</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 text-xs font-mono">
                    <span className="text-[#A6A9B5]">Total (incl. 18% tax):</span>
                    <span className="text-emerald-400 font-bold text-sm">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0D0F17] p-2.5 rounded border border-white/5 font-mono text-[11px] text-[#A6A9B5] flex justify-between items-center">
                <span>Verification Token: #TK-{Math.abs(selectedEvent.length * ticketCount * 832)}</span>
                <span className="text-emerald-400">✓ Cryptographically Signed</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. BOOKS INVENTORY / READING TRACKER */}
      {project.interactiveType === 'reading-tracker' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Data Persistence</span>
              <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 mt-1">
                <Database className="w-3.5 h-3.5" />
                books.json Synchronized
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Total Tracked</span>
              <span className="text-xs font-mono text-[#F5F5F2] mt-1 block font-medium">
                {readingList.length} Books in Library
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Finished</span>
              <span className="text-sm font-mono text-[#6366F1] mt-1 block font-bold">
                {readingList.filter(b => b.status === 'Completed').length} Books Completed
              </span>
            </div>
          </div>

          <div className="bg-[#171A25] p-4 rounded-lg border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#F5F5F2] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#6366F1]" />
                Interactive Reading State Manager
              </span>
              <span className="text-[11px] text-[#A6A9B5] font-mono">
                Click any status badge to toggle state
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {readingList.map(book => (
                <div key={book.id} className="bg-[#252A39] p-3.5 rounded-lg border border-white/5 flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="text-xs font-bold text-[#F5F5F2]">{book.title}</h4>
                    <p className="text-[11px] text-[#A6A9B5] font-mono mt-0.5">{book.author} • {book.pages} pages</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex text-amber-400">
                      {Array.from({ length: book.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>

                    <button
                      onClick={() => toggleBookStatus(book.id)}
                      className={`px-2.5 py-0.5 text-[11px] font-mono rounded cursor-pointer font-semibold transition-all ${
                        book.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : book.status === 'In Progress'
                          ? 'bg-[#6366F1]/20 text-[#818CF8] border border-[#6366F1]/30'
                          : 'bg-white/10 text-[#A6A9B5]'
                      }`}
                    >
                      {book.status} ↻
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. ATM SIMULATOR */}
      {project.interactiveType === 'atm-simulator' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">ATM State Machine</span>
              <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Online • {atmScreen}
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Account Balance</span>
              <span className="text-xs font-mono text-[#F5F5F2] mt-1 block font-bold">
                {atmAuthenticated ? `₹${atmBalance.toLocaleString('en-IN')}` : '🔒 Encrypted'}
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Auth Mode</span>
              <span className="text-sm font-mono text-[#F7B52B] mt-1 block font-bold">
                {atmAuthenticated ? 'Verified (1234)' : 'Awaiting PIN'}
              </span>
            </div>
          </div>

          <div className="bg-[#171A25] p-5 rounded-lg border border-white/5">
            {!atmAuthenticated ? (
              <div className="max-w-xs mx-auto text-center space-y-4 py-3">
                <div>
                  <h4 className="text-sm font-bold text-white">Enter 4-Digit Security PIN</h4>
                  <p className="text-xs text-[#A6A9B5] mt-1 font-mono">Sandbox Demo PIN: <strong className="text-[#10B981]">1234</strong></p>
                </div>

                <input
                  type="password"
                  maxLength={4}
                  value={enteredPin}
                  onChange={e => setEnteredPin(e.target.value)}
                  className="w-36 text-center tracking-[0.5em] text-lg font-mono bg-[#252A39] border border-white/20 rounded p-2 text-white outline-none focus:border-[#10B981]"
                  placeholder="••••"
                />

                {atmMessage && <p className="text-xs text-red-400 font-mono">{atmMessage}</p>}

                <button
                  onClick={handleAtmPinSubmit}
                  className="w-full py-2 bg-[#10B981] hover:bg-[#10B981]/90 text-black font-mono font-bold text-xs rounded cursor-pointer transition-colors"
                >
                  Authenticate Card
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex gap-2">
                    {(['MENU', 'WITHDRAW', 'DEPOSIT', 'STATEMENT'] as const).map(screen => (
                      <button
                        key={screen}
                        onClick={() => { setAtmScreen(screen); setAtmMessage(''); }}
                        className={`px-3 py-1 text-xs rounded font-mono cursor-pointer transition-all ${
                          atmScreen === screen ? 'bg-[#10B981] text-black font-bold' : 'text-[#A6A9B5] hover:text-white bg-[#252A39]'
                        }`}
                      >
                        {screen}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => { setAtmAuthenticated(false); setEnteredPin(''); setAtmScreen('PIN'); }}
                    className="text-xs text-red-400 hover:underline font-mono cursor-pointer"
                  >
                    Eject Card
                  </button>
                </div>

                {atmScreen === 'WITHDRAW' && (
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono text-[#A6A9B5]">Select or Enter Withdrawal Amount</h5>
                    <div className="grid grid-cols-3 gap-2">
                      {[500, 1000, 2000, 5000].map(amt => (
                        <button
                          key={amt}
                          onClick={() => handleAtmWithdraw(amt)}
                          className="p-2.5 bg-[#252A39] hover:bg-[#10B981] hover:text-black text-white font-mono text-xs rounded border border-white/5 transition-all cursor-pointer font-bold"
                        >
                          ₹{amt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {atmScreen === 'DEPOSIT' && (
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono text-[#A6A9B5]">Deposit Cash into Account</h5>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={depositAmount}
                        onChange={e => setDepositAmount(parseInt(e.target.value) || 0)}
                        className="flex-1 bg-[#252A39] border border-white/10 rounded px-3 py-2 text-xs font-mono text-white outline-none"
                      />
                      <button
                        onClick={() => handleAtmDeposit(depositAmount)}
                        className="px-4 py-2 bg-[#10B981] hover:bg-[#10B981]/90 text-black font-mono font-bold text-xs rounded cursor-pointer"
                      >
                        Deposit Cash
                      </button>
                    </div>
                  </div>
                )}

                {atmScreen === 'SUCCESS' && (
                  <div className="bg-[#252A39] p-4 rounded-lg border border-[#10B981]/30 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                      <Check className="w-4 h-4" />
                      {atmMessage}
                    </div>
                    <div className="text-xs font-mono text-[#A6A9B5] space-y-1">
                      <span className="block text-white">Denomination Breakdown:</span>
                      <div>₹500 Notes: <strong className="text-emerald-400">{denominations.n500}</strong></div>
                      <div>₹200 Notes: <strong className="text-emerald-400">{denominations.n200}</strong></div>
                      <div>₹100 Notes: <strong className="text-emerald-400">{denominations.n100}</strong></div>
                    </div>
                  </div>
                )}

                {atmScreen === 'STATEMENT' && (
                  <div className="bg-[#0D0F17] p-3 rounded border border-white/5 font-mono text-xs space-y-2">
                    <span className="text-[#A6A9B5] text-[11px] block border-b border-white/5 pb-1">Recent Transactions Mini-Statement</span>
                    {atmTransactions.map(tx => (
                      <div key={tx.id} className="flex justify-between items-center text-[11px]">
                        <span className={tx.type === 'DEPOSIT' ? 'text-emerald-400' : 'text-red-400'}>
                          {tx.type === 'DEPOSIT' ? '+' : '-'} ₹{tx.amount} ({tx.date})
                        </span>
                        <span className="text-[#A6A9B5]">Bal: ₹{tx.balance}</span>
                      </div>
                    ))}
                  </div>
                )}

                {atmScreen === 'MENU' && (
                  <div className="p-3 bg-[#252A39] rounded-lg border border-white/5 text-xs text-[#A6A9B5] font-mono leading-relaxed">
                    Welcome, Shubham Kumar! Your current savings balance is <strong className="text-emerald-400">₹{atmBalance.toLocaleString('en-IN')}</strong>. Choose an operation above to withdraw cash with automatic denomination calculation.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 7. STUDIO AGENCY */}
      {project.interactiveType === 'studio-agency' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Design Palette</span>
              <span className="text-xs font-mono text-[#F59E0B] mt-1 block font-bold capitalize">
                {studioColorTheme} Theme Active
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Grid System</span>
              <span className="text-xs font-mono text-[#F5F5F2] mt-1 block">
                12-Column Responsive
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Client Inquiries</span>
              <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 mt-1">
                Active Ready
              </span>
            </div>
          </div>

          <div className="bg-[#171A25] p-4 rounded-lg border border-white/5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#F5F5F2] flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#F59E0B]" />
                Interactive Agency Theme Switcher
              </span>
              <div className="flex gap-1.5">
                {(['amber', 'emerald', 'violet'] as const).map(theme => (
                  <button
                    key={theme}
                    onClick={() => setStudioColorTheme(theme)}
                    className={`w-5 h-5 rounded-full border-2 transition-transform cursor-pointer ${
                      theme === 'amber' ? 'bg-amber-500' : theme === 'emerald' ? 'bg-emerald-500' : 'bg-purple-500'
                    } ${studioColorTheme === theme ? 'scale-125 border-white' : 'border-transparent opacity-60'}`}
                  />
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#252A39] border border-white/5 space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#F59E0B] font-mono font-bold">Studio Showcase</span>
              <h3 className="text-sm font-bold text-white">Delivering Bespoke Digital Experiences & High-Conversion Systems</h3>
              <p className="text-xs text-[#A6A9B5] leading-relaxed">
                A clean, aesthetic creative studio portfolio engineered with fluid typography, responsive layout mathematics, and frictionless client inquiry pipelines.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 8. VIGENERE CRYPTANALYSIS */}
      {project.interactiveType === 'vigenere-crypt' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Conference Paper</span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mt-1">
                IEEE ICCBI 2026 (Dubai)
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Kasiski Deduced Key Length</span>
              <span className="text-xs font-mono text-[#F7B52B] mt-1 block font-bold">
                Length = {cipherKey.length} (GCD Factored)
              </span>
            </div>
            <div className="bg-[#252A39] p-3 rounded-lg border border-white/5">
              <span className="text-[11px] text-[#A6A9B5] uppercase font-mono block">Publication ISBN</span>
              <span className="text-xs font-mono text-[#F5F5F2] mt-1 block">
                979-8-3315-6380-6
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#171A25] p-4 rounded-lg border border-white/5 space-y-3">
              <div>
                <label className="text-[11px] text-[#A6A9B5] font-mono block mb-1">Plaintext Input</label>
                <textarea
                  value={plainText}
                  onChange={e => setPlainText(e.target.value)}
                  rows={2}
                  className="w-full bg-[#252A39] border border-white/10 rounded p-2 text-xs text-[#F5F5F2] font-mono focus:border-[#10B981] outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] text-[#A6A9B5] font-mono block mb-1">Vigenere Secret Key (Shift Vector)</label>
                <input
                  type="text"
                  value={cipherKey}
                  onChange={e => setCipherKey(e.target.value.toUpperCase())}
                  className="w-full bg-[#252A39] border border-white/10 rounded p-2 text-xs text-[#F5F5F2] font-mono uppercase focus:border-[#10B981] outline-none font-bold"
                  placeholder="e.g. KASISKI"
                />
              </div>

              <div>
                <label className="text-[11px] text-[#A6A9B5] font-mono block mb-1">Resulting Ciphertext Stream</label>
                <div className="w-full bg-[#0D0F17] border border-white/5 rounded p-2.5 text-xs text-[#10B981] font-mono break-all font-bold">
                  {cipherText || 'N/A'}
                </div>
              </div>
            </div>

            <div className="bg-[#171A25] p-4 rounded-lg border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#F5F5F2] flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-[#10B981]" />
                  Statistical Letter Frequency Distribution
                </span>
                <p className="text-[11px] text-[#A6A9B5] leading-relaxed mb-3">
                  Visualizing character occurrences in the generated ciphertext. In a monoalphabetic cipher, frequency spikes match standard English (E, T, A, O, I, N). In polyalphabetic Vigenere, frequencies flatten based on key length.
                </p>
              </div>

              <div className="bg-[#0D0F17] p-2 rounded border border-white/5">
                <div className="flex items-end gap-1 h-20 pt-2 px-1">
                  {letterFrequencies.slice(0, 13).map(({ letter, pct }) => (
                    <div key={letter} className="flex-1 flex flex-col items-center gap-1 group relative">
                      <div 
                        className="w-full bg-[#10B981] rounded-t transition-all duration-300 group-hover:bg-[#38BDF8]"
                        style={{ height: `${Math.min(100, Math.max(8, Number(pct) * 4))}%` }}
                      />
                      <span className="text-[9px] font-mono text-[#A6A9B5]">{letter}</span>
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black/90 px-1 py-0.5 rounded text-[8px] font-mono text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                        {pct}%
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[9px] text-[#A6A9B5] font-mono mt-1 pt-1 border-t border-white/5 px-1">
                  <span>Frequency Sample (A—M)</span>
                  <span className="text-[#10B981]">Kasiski Examination Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
