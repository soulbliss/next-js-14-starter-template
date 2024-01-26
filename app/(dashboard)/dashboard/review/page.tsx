import { Separator } from '@/components/ui/separator';
export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Welcome to yearly review</h3>
        <p className="text-sm text-muted-foreground">
          Let us begin with your year review.
        </p>
      </div>
      <Separator />
    </div>
  );
}
