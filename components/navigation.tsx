import { Home, Grid3x3, Plus, MessageSquare, User } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-center justify-around h-16 max-w-2xl mx-auto">
        <button className="p-2 hover:bg-muted rounded-lg transition text-foreground">
          <Home className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition text-foreground">
          <Grid3x3 className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition text-foreground bg-primary rounded-full">
          <Plus className="w-6 h-6 text-primary-foreground" />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition text-foreground relative">
          <MessageSquare className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-muted rounded-lg transition text-foreground">
          <User className="w-6 h-6" />
        </button>
      </div>
    </nav>
  )
}
