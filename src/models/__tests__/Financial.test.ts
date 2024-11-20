import { FinancialController } from "../../controllers/FinancialController";
import { Financial } from "../Financial";
const con=new FinancialController();
const f1= new Financial("1",234,34);

const expected=200

test("Expects Tution fees to be 200 when Financial amountdue is 234 ans scholarship is 34 ",()=>{
    expect(con.calculateTuition(f1,"1")).toBe(expected);
})