import AddDeliveryForm from "./adddeliveryform"

const AddDeliveryComponent = ({clients}) => {

    return (
        <div className="p-10 flex flex-col space-y-6">
                <h1 className="text-3xl font-bold font-inter text-title">
                    Ajouter une livraison
                </h1>
                <p className="text-sm font-normal font-source text-gray-800 w-2/3">
                    Ajouter vos livraisons en remplissant les champs ci dessous, vous pouvez toujours 
                    modifier une livraison en cas d'erreur, et vous serez notifié lors du succès d'un ajout 
                </p>
                <AddDeliveryForm clients={clients} />
        </div>
    )
}

export default AddDeliveryComponent;