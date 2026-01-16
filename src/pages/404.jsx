import NotFoundPageComponent from "@/PageComponent/NotFound";
import { MetaTitle } from "@/Common/MetaTitle";

export default function Custom404() {
    return (
        <>
            <MetaTitle title="Page Not Found - Ophthall Conclave" />
            <NotFoundPageComponent />
        </>
    );
}
