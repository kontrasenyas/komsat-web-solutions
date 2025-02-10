
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    details?: string;
  };
}

export const ServiceDetailsModal = ({
  isOpen,
  onClose,
  service,
}: ServiceDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
          <DialogDescription className="mt-4">
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <div className="space-y-4 text-left">
              {service.details || (
                <>
                  <p>Our expert team provides comprehensive {service.title.toLowerCase()} services including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Strategic planning and consultation</li>
                    <li>Implementation and deployment</li>
                    <li>Ongoing support and maintenance</li>
                    <li>Performance optimization</li>
                    <li>Regular updates and improvements</li>
                  </ul>
                </>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
