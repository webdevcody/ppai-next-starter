export function FeaturesSection() {
  return (
    <section
      id="features"
      className="container mx-auto py-24 bg-gray-100 dark:bg-background"
    >
      <p className="text-4xl text-center mb-12">
        Including all of the modern libraries you&apos;d need
      </p>

      <ul className="max-w-6xl mx-auto gap-2 list-disc grid grid-cols-3 px-12 leading-10">
        <li>Authentication (Next-Auth)</li>
        <li>Authorization (custom)</li>
        <li>Subscription Management (Stripe)</li>
        <li>Stripe Integration / Webhooks</li>
        <li>Todo Management</li>
        <li>Drizzle ORM</li>
        <li>Light / Dark Mode</li>
        <li>ShadCN components</li>
        <li>Tailwind CSS</li>
        <li>Account Deletion</li>
        <li>Changelog (via Project Planner AI)</li>
        <li>Analytics (via Project Planner AI)</li>
        <li>Feedback (via Project Planner AI)</li>
      </ul>
    </section>
  );
}
