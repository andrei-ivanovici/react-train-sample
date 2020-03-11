import {ErrorViewer} from "./ErrorViewer";

import React from "react";
import {render} from '@testing-library/react';

describe("error viewer", () => {

    it("should have rendered", () => {
        const error = {
            status: "500 "
        };

        const {getByText} = render(<ErrorViewer error={error}/>);
        const pre = getByText(/500/);
        expect(pre).toBeInTheDocument();

    });

    it("should not render", () => {
        const error = null;

        const {container} = render(<ErrorViewer error={error}/>);

        expect(container).toBeEmpty();
    });

});
