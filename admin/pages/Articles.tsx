import {
  TablePage,
  TableCell,
  Field,
  CreatePage,
  TextField,
  TextAreaField,
  PageLinkById,
  EditPage
} from "@contember/admin";
import React from 'react';

export const ArticleList = (
  <TablePage entities="Article" pageName="articles">
    <TableCell>
      <Field field="title" />
    </TableCell>
    <TableCell shrunk>
      <PageLinkById to="article">edit</PageLinkById>
    </TableCell>
  </TablePage>
);

export const ArticleCreate = (
  <CreatePage
    entity="Article"
    pageName="articleNew"
    rendererProps={{ title: "Add a article" }}
    redirectOnSuccess={(request, id) => ({
      ...request,
      pageName: "article",
      parameters: {
        id,
      },
    })}
  >
    <TextField field="title" label="Title" />
    <TextAreaField field="content" label="content" />
  </CreatePage>
);

export const ArticleEdit = (
  <EditPage
    entity="Article(id = $id)"
    pageName="article"
  >
      <TextField field="title" label="Title" />
      <TextAreaField field="content" label="content" />
  </EditPage>
)
