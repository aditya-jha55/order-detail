
import Images from "../../../Utils/images";



interface OrderNameCardProps {
  setName: string;
  setId: string;
  isEditMode?: boolean;
  isCbChecked?: boolean;
  isCBIndeterminate?: boolean;
  disableCheckbox?: boolean;
  onCheckboxChange?: (isChecked: boolean) => void;
  loading?: boolean;
}

export default function OrderNameCard({
  setName,
}: OrderNameCardProps) {

  return (
    <div className="order_name">
      <div className="order_name_inner">
        {/* {isEditMode && (
          <>
            {loading ? (
              <CircularProgress size={20} color="primary" />
            ) : (
              <InputCheckbox
                id={setId}
                name={setName}
                checked={isCbChecked}
                indeterminate={isCBIndeterminate}
                disabled={disableCheckbox}
                onChange={() => {
                  onCheckboxChange?.(isCBIndeterminate || !isCbChecked);
                }}
              />
            )}
          </>
        )} */}
        <div className="icon">
          <figure>
            <img src={Images.STUDIO_IC} alt={`${setName} image`} />
          </figure>
        </div>
        <div className="info">
          <h3>{setName}</h3>
          
            <p>
              PO Number 12345
            </p>
          
        </div>
      </div>
    </div>
  );
}
