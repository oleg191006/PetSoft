import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type PetButtonProps = {
  children?: React.ReactNode;
  actionType: "add" | "edit" | "checkout";
};

const PetButton = ({ children, actionType }: PetButtonProps) => {
  if (actionType === "add") {
    return (
      <Button size="icon">
        <PlusIcon className="h-6 w-6" />
      </Button>
    );
  }
  return <Button variant="secondary">{children}</Button>;
};

export default PetButton;
