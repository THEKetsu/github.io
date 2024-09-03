import Welcome from '@/markdown/welcome.mdx';

export default function Page() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'left' }}>
        <Welcome />
      </div>
    </div>
  );
}