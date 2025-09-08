import ActionButton from "../ui/ActionButton";

const QuickActionCard = ({ title = "Quick Links", actions }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {actions.map((action, id) => (
          // For each action object → renders an ActionButton.
          <ActionButton key={id} {...action} />
          //{...action} → spread operator: passes all properties of the action object as props to ActionButton.
        ))}
      </div>
    </div>
  );
};

export default QuickActionCard;
