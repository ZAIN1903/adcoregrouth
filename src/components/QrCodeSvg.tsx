import React from 'react';
import { TelegramIcon } from './TelegramIcon';

interface QrCodeProps {
  url: string;
  size?: number;
}

export const QrCodeSvg: React.FC<QrCodeProps> = ({ url, size = 200 }) => {
  // Generate deterministic matrix based on url string to produce a sharp, realistic QR visual
  const gridSize = 25;
  const hashString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const seed = hashString(url);

  // Position markers in 3 corners
  const isCornerMarker = (r: number, c: number) => {
    // Top-left
    if (r < 7 && c < 7) {
      if (r === 0 || r === 6 || c === 0 || c === 6) return true;
      if (r >= 2 && r <= 4 && c >= 2 && c <= 4) return true;
      return false;
    }
    // Top-right
    if (r < 7 && c >= gridSize - 7) {
      const col = c - (gridSize - 7);
      if (r === 0 || r === 6 || col === 0 || col === 6) return true;
      if (r >= 2 && r <= 4 && col >= 2 && col <= 4) return true;
      return false;
    }
    // Bottom-left
    if (r >= gridSize - 7 && c < 7) {
      const row = r - (gridSize - 7);
      if (row === 0 || row === 6 || c === 0 || c === 6) return true;
      if (row >= 2 && row <= 4 && c >= 2 && c <= 4) return true;
      return false;
    }
    // Center logo clearance zone
    const centerStart = Math.floor(gridSize / 2) - 2;
    const centerEnd = Math.floor(gridSize / 2) + 2;
    if (r >= centerStart && r <= centerEnd && c >= centerStart && c <= centerEnd) {
      return false;
    }
    return null;
  };

  const modules: boolean[][] = [];
  for (let r = 0; r < gridSize; r++) {
    const row: boolean[] = [];
    for (let c = 0; c < gridSize; c++) {
      const corner = isCornerMarker(r, c);
      if (corner !== null) {
        row.push(corner);
      } else {
        // pseudo-random based on coordinate & url seed
        const val = ((seed * (r + 1) * 31 + c * 17 + (r ^ c) * 13) % 100) > 46;
        row.push(val);
      }
    }
    modules.push(row);
  }

  const cellSize = size / gridSize;

  return (
    <div className="relative inline-flex items-center justify-center p-3 rounded-2xl bg-white shadow-2xl">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rounded-lg">
        {modules.map((row, r) =>
          row.map((active, c) => {
            if (!active) return null;
            return (
              <rect
                key={`${r}-${c}`}
                x={c * cellSize}
                y={r * cellSize}
                width={cellSize * 0.92}
                height={cellSize * 0.92}
                rx={cellSize * 0.2}
                fill="#050914"
              />
            );
          })
        )}
      </svg>
      {/* Center Telegram icon badge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center text-white shadow-lg ring-4 ring-white">
          <TelegramIcon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
