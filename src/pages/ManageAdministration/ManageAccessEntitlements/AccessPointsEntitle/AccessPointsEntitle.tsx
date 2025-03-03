import { useManageAccessEntitlementsContext } from "@/Context/ManageAccessEntitlements/ManageAccessEntitlementsContext";
import CustomModal from "@/components/CustomModal/CustomModal";

import AccessPointsEntitleModal from "./CreateAccessPointsEntitleModal";
import AccessPointsEntitleTable from "./AccessPointsEntitleTable";
import { X } from "lucide-react";
import AccessPointsEditModal from "../EditEntitlementWithAccessPoints/AccessPointsEditModalTable";
import CustomModal2 from "@/components/CustomModal/CustomModal2";

const AccessPointsEntitle = () => {
  const { isOpenModal, setIsOpenModal, selectedManageAccessEntitlements } =
    useManageAccessEntitlementsContext();
  // const handleClose = () => {
  //   setIsOpenModal(false);
  //   fetchAccessPointsEntitlement(selected[0]);
  // };
  return (
    <div>
      <div>
        <AccessPointsEntitleTable />
        {/* Modal */}
        <div>
          {isOpenModal === 3 && (
            <CustomModal2>
              <div className="flex justify-between p-2 bg-slate-300 rounded-t-lg">
                <h2 className="text-lg font-bold capitalize">
                  Entitlement Name :{" "}
                  {selectedManageAccessEntitlements?.entitlement_name}
                </h2>
                <X
                  onClick={() => {
                    setIsOpenModal(0);
                  }}
                  className="cursor-pointer"
                />
              </div>
              {/* Card start */}
              <div className="p-2">
                <AccessPointsEditModal />
              </div>
            </CustomModal2>
          )}
        </div>
        <div>
          {isOpenModal === 2 && (
            <CustomModal>
              <div className="flex justify-between p-2 bg-slate-300 rounded-t-lg">
                <h2 className="text-lg font-bold">Create Access Point</h2>
                <X
                  onClick={() => {
                    setIsOpenModal(0);
                  }}
                  className="cursor-pointer"
                />
              </div>
              {/* Card start */}
              <div className="p-2">
                <AccessPointsEntitleModal />
              </div>
            </CustomModal>
          )}
        </div>
      </div>
    </div>
  );
};
export default AccessPointsEntitle;
// not working this file
