
import Images from '../Utils/images';

interface Props {
  type?: 'div' | 'table';
  tableColumns?: number;
  height?: 'full' | 'auto';
  overlay?: boolean;
  className?: string;
}
export default function Loading(props: Props) {
  const { type, tableColumns, height, overlay, className } = props;
  const width: number = window.innerWidth;
  return type === 'div' ? (
    <div
      className={`loading ${height === 'full' ? 'fullHeight' : 'auto_height'} ${
        overlay ? 'loading_overlay' : ''
      } ${className}`}
    >
      <img src={Images.LOADER_TWO} alt={''} />
    </div>
  ) : (
    <>
      {width > 600 ? (
        // <tbody>
        <tr>
          <td align="center" colSpan={tableColumns}>
            <div className="loading">
              <img src={Images.LOADER_TWO} alt={''} />
            </div>
          </td>
        </tr>
      ) : (
        // </tbody>
        <div
          className={`loading ${height === 'full' ? 'fullHeight' : ''}`}
          style={{
            width: `${width}px`,
          }}
        >
          <img src={Images.LOADER_TWO} alt={''} />
        </div>
      )}
    </>
  );
}
