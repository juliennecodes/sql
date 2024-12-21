import {SeedData} from "../notes/SeedData";
import {CreateTable} from "../notes/CreateTable";
import {InsertIntoTable} from "../notes/InsertIntoTable";
import {UpdateRecords} from "../notes/UpdateRecords";
import {DeleteRecords} from "../notes/DeleteRecords";
import {SelectRecords} from "../notes/SelectRecords";
import {DateFunctions} from "../notes/DateFunctions";
import {Joins} from "../notes/Joins";
import {OrderBy} from "../notes/OrderBy";
import {GroupBy} from "../notes/GroupBy";
import {Subquery} from "../notes/Subquery";
import {Functions} from "../notes/Functions";
import {Having} from "../notes/Having";
import {LimitAndOffset} from "../notes/LimitAndOffset";
import {Variables} from "../notes/Variables";
import {Datatypes} from "../notes/Datatypes";
import {Json} from "../notes/Json";
import {AllQueries} from "../notes/AllQueries";

const createLinkConfig = (title, jsxElement) => {
    const url = title.split(' ')
        .map((word) => word.toLowerCase())
        .reduce((acc, word) => `${acc}-${word}`);

    return {title, url, jsxElement};
}
export const navigationConfig = [
    createLinkConfig('Seed Data', <SeedData />),
    createLinkConfig('Datatypes', <Datatypes />),
    createLinkConfig('All queries', <AllQueries />),
    createLinkConfig('Create Table', <CreateTable />),
    createLinkConfig('Insert Into Table', <InsertIntoTable/>),
    createLinkConfig('Select records', <SelectRecords />),
    createLinkConfig('Update records', <UpdateRecords />),
    createLinkConfig('Delete records', <DeleteRecords />),
    createLinkConfig('Joins', <Joins />),
    createLinkConfig('Group by', <GroupBy />),
    createLinkConfig('Having', <Having />),
    createLinkConfig('Order by', <OrderBy />),
    createLinkConfig('Limit and Offset', <LimitAndOffset />),
    createLinkConfig('Subquery', <Subquery />),
    createLinkConfig('Variables', <Variables />),
    createLinkConfig('Date functions', <DateFunctions />),
    createLinkConfig('Functions', <Functions />),
    createLinkConfig('Json', <Json />)
]