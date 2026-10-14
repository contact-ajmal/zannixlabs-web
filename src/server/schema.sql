-- ZannixLabs D1 Database Schema
-- Subscribers table for preprint announcements & drops
CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  status TEXT DEFAULT 'active',
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Research paper download tracking
CREATE TABLE IF NOT EXISTS paper_downloads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  paper_id TEXT NOT NULL,
  download_type TEXT NOT NULL, -- 'pdf', 'tar_gz'
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Academic inquiries and collaboration requests
CREATE TABLE IF NOT EXISTS inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT NOT NULL,
  organization TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_paper_downloads_paper ON paper_downloads(paper_id);
