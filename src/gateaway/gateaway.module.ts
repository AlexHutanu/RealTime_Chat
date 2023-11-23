import { Module } from "@nestjs/common";
import { MyGateaway } from "./gateaway";

@Module({
    providers: [MyGateaway],
})
export class GateawayModule{

}