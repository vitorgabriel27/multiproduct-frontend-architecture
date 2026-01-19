import { Card, CardContent, CardHeader, CardTitle } from '@multiproduct/ui';

export default function Page() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          This is your product dashboard.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Status</CardTitle>
        </CardHeader>
        <CardContent>
          All systems operational.
        </CardContent>
      </Card>
    </div>
  );
}
