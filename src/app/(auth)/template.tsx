type TemplateProps = {
  children: React.ReactNode;
};

function Template({ children }: TemplateProps) {
  return <div className="flex justify-center h-screen p-6">{children}</div>;
}

export default Template;
