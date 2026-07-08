import MembershipPlans from "@/app/components/MembershipPlans";
import PageHero from "@/app/components/PageHero";

export const metadata = {
  title: "Memberships | Auswork Brisbane",
  description:
    "Save up to $150 a clean with Auswork recurring window cleaning memberships across Greater Brisbane.",
};

export default function MembershipsPage() {
  return (
    <div>
      <PageHero
        variant="blue"
        label="Save year-round"
        title="Auswork Memberships"
        description="Stay spotless year-round and pocket the savings. Pick the rhythm that fits your home, and cancel anytime."
      />

      <MembershipPlans showDetailsLink={false} />
    </div>
  );
}
