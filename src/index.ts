import { Skeleton as BaseSkeleton } from "./components/Skeleton";

import { Text } from "./components/Text";
import { AvatarText } from "./components/AvatarText";
import { Card } from "./components/Card";
import { Table } from "./components/Table";
import { Button } from "./components/Button";
import { Image } from "./components/Image";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Stat } from "./components/Stat";
import { Banner } from "./components/Banner";
import { Comment } from "./components/Comment";
import { ProductRow } from "./components/ProductRow";
import { Chip } from "./components/Chip";

/**
 * Skeleton — the main export.
 *
 * Use it as a base element:
 *   <Skeleton width={200} height={20} />
 *
 * Or pick a pre-built composite:
 *   <Skeleton.Card />
 *   <Skeleton.Text lines={4} />
 *   <Skeleton.AvatarText />
 *   <Skeleton.Table rows={5} cols={4} />
 *   <Skeleton.Button />
 *   <Skeleton.Image aspectRatio="16:9" />
 *   <Skeleton.List items={6} showAvatar />
 *   <Skeleton.Form fields={3} />
 *   <Skeleton.Stat count={4} />
 *   <Skeleton.Banner />
 *   <Skeleton.Comment items={3} />
 *   <Skeleton.ProductRow items={4} />
 *   <Skeleton.Chip count={6} />
 */
const Skeleton = Object.assign(BaseSkeleton, {
  // Original
  Text,
  AvatarText,
  Card,
  Table,
  Button,
  Image,
  List,
  Form,
  Stat,
  Banner,
  Comment,
  ProductRow,
  Chip,
});

export { Skeleton };
export default Skeleton;

// Named type exports so consumers get full IntelliSense
export type { SkeletonProps, SkeletonVariant } from "./components/Skeleton";
export type { SkeletonTextProps } from "./components/Text";
export type { SkeletonAvatarTextProps } from "./components/AvatarText";
export type { SkeletonCardProps } from "./components/Card";
export type { SkeletonTableProps } from "./components/Table";
export type { SkeletonButtonProps } from "./components/Button";
export type { SkeletonImageProps, ImageAspectRatio } from "./components/Image";
export type { SkeletonListProps } from "./components/List";
export type { SkeletonFormProps, FormFieldType } from "./components/Form";
export type { SkeletonStatProps } from "./components/Stat";
export type { SkeletonBannerProps } from "./components/Banner";
export type { SkeletonCommentProps } from "./components/Comment";
export type { SkeletonProductRowProps } from "./components/ProductRow";
export type { SkeletonChipProps } from "./components/Chip";
