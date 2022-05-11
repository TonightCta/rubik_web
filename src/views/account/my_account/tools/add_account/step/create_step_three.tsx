import React from "react";

const StepThree = (): React.ReactElement => {
    return (
        <div className="add-step-three">
            <div className="show-inp">
                <p className="inp-title">
                    Partial Seed
                </p>
                <p className="inp-content">
                    spin ... ... guide ... ... coach
                </p>
            </div>
            <div className="show-inp">
                <p className="inp-title">
                    Keypair Type
                </p>
                <p className="inp-content">
                    sr25519
                </p>
            </div>
            <div className="show-inp">
                <p className="inp-title">
                    Derivation Path
                </p>
                <p className="inp-content">
                    {`< none provided >`}
                </p>
            </div>
        </div>
    )
};

export default StepThree;