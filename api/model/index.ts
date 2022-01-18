import { SchemaDefinition as d } from "@contember/schema-definition";

export class Article {
  title = d.stringColumn();
  content = d.stringColumn();
  perex = d.stringColumn();
  published = d.boolColumn();
}
