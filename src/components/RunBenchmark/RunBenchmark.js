import React from 'react';
import { Button } from 'carbon-components-react';

const RunBenchmark = props => {
    return(
        <>
        <Button onClick={()=>{
            console.log("Running benchmark on repo:", props.repo, " branch:", props.branch);
        }}>Run benchmark</Button>
        </>
    );
};

export default RunBenchmark;