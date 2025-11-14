import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Schedule a Call</DialogTitle>
        </DialogHeader>
        <iframe
          src="https://calendly.com/"
          className="w-full h-full rounded-lg"
          frameBorder="0"
          title="Schedule a call with us"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;
