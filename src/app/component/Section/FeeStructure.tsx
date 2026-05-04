import { HeroPage } from "@/app/interface"
import HeadAnySection from "../Ui/HeadAnySection"

function FeeStructure() {
    const DataHeadSection: HeroPage = {
            title1: "Our Features",
            title2: "Fee Structure",
            text: "Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
        }
    return (
        <div className="mt-50">
            <HeadAnySection {...DataHeadSection}/>
            <div className="flex flex-col  gap-20 flex-nowrap ">
                <div className="rounded-lg border-2 border-gray-15 p-15 shadow-[6px_6px_0px_2px_#1E1E1E]  bg-white overflow-x-auto scroll-smooth ">
                    <table className="flex flex-col gap-7.5 min-w-295">
                        <thead className="bg-orange-95 border-2 border-gray-15 rounded-xl overflow-hidden">
                            <tr className="w-full flex text-start bg-Orange-90">
                                <th className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">Program</th>
                                <th className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">Age Group</th>
                                <th className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">Annual Tuition</th>
                                <th className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">Registration Fee</th>
                                <th className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">Activity Fee</th>
                            </tr>
                        </thead>
                        <tbody className="bg-Orange-97 border-2 border-gray-15 rounded-xl overflow-hidden w-full ">
                            <tr className="w-full border-2 border-gray-15 flex text-center">
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">Nursery</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">2 - 3 Years</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">$1,686</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">$162</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">$12</td>
                            </tr>
                            <tr className="w-full border-2 border-gray-15 flex text-center">
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">Pre - Kindergartens</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">3 - 4 Years</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">$2,686</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">$220</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">$16</td>
                            </tr>
                            <tr className="w-full border-2 border-gray-15 flex text-center">
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">Kindergarten</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">4 - 5 Years</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">$3,686</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">$340</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium">$20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="rounded-lg border-2 border-gray-15 p-15 shadow-[6px_6px_0px_2px_#1E1E1E]  bg-white overflow-x-auto scroll-smooth ">
                    <table  className="flex flex-col gap-7.5 min-w-295">
                        <thead className="bg-orange-95 border-2 bg-Orange-90 border-gray-15 rounded-xl overflow-hidden">
                            <tr className="w-full flex text-start">
                                <th className=" py-5 px-8.5 w-[20%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium"><h3>Additional Services</h3></th>
                            </tr>
                        </thead>
                        <tbody className="bg-orange-99 border-2 border-gray-15 rounded-xl overflow-hidden w-full bg-Orange-97 ">
                            <tr className="w-full border-2 border-gray-15 flex text-center">
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[50%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium text-start">Before and After-School Care</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[50%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium text-start">$120 / per month</td>
                            </tr>
                            <tr className="w-full border-2 border-gray-15 flex text-center">
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[50%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium text-start" >Language Immersion Program</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[50%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium text-start">$60 / per semester</td>
                            </tr>
                            <tr className="w-full border-2 border-gray-15 flex text-center">
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[50%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium text-start">Transportation (optional)</td>
                                <td className="border-x-2 border-gray-15 py-5 px-8.5 w-[50%] 2xl:text-[20px] text-[18px] text-gray-15 font-medium text-start">$80 / per month</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FeeStructure