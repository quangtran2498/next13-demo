import Head from "next/head";
interface IProps {
  title?: string;
  description?: string;
  image?: string;
}
export const MetaTags = ({ title, description, image }: IProps) => {
  return (
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
    </Head>
  );
};
