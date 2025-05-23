'use client'

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import heartIcon from '@/public/heart.inline.svg';

import UndoHeader from '@/components/undo-header';
import styles from './styles.module.scss'
import Icon from '@/components/ui/icon';
import { getWishlist, removeFromWishlist } from '@/service';
import LoadingIcon from '@/public/loading.svg';

export default function Wishlist() {
  const [loading, setLoading] = useState<boolean>(true);
  const [undoHistory, setUndoHistory] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>('All');
  const [uniqueDivisions, setUniqueDivisions] = useState<string[]>([]);
  const [filteredWishlistItems, setFilteredWishlistItems] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (id: string) => {
    await removeFromWishlist(id);
    fetchWishlist();
  }

  const handleTabClick = (division: string, listResponse: any[]) => {
    setActiveTab(division)
    const filteredItems =
      division === 'All' ? listResponse : (listResponse?.filter(item => item.division_name === division) ?? [])
    setFilteredWishlistItems((filteredItems ?? []).reverse());
  }

  const fetchWishlist = async () => {
    setLoading(true);
    const response = await getWishlist();
    const list = response.items;
    const uniqueDivisions: string[] = Array.from(new Set(list.map((item: any) => item.division_name)));
    setUniqueDivisions(['All', ...uniqueDivisions]);
    setList(list || []);
    handleTabClick(activeTab, list);
    setLoading(false);
  }

  return <div className={styles.wishlistContainer}>
    <UndoHeader
      hideBackButton
    />
    {
      loading && <div className="flex flex-1 justify-center items-center h-[90vh]">
        <div className="w-10 h-10 border-2 border-[#ffa273] border-t-transparent rounded-full animate-spin" />
      </div>}
      {!loading && list.length === 0 && <div className="flex flex-1 justify-center items-center h-[90vh]">
        <div className="text-center text-sm text-gray-500">
          No items in your wishlist
        </div>
      </div>}
        {!loading && list.length > 0 && <>
          <div className={styles.wishlistHeader}>
            <h2 className={styles.wishlistHeaderTitle}>
              My Favorites
            </h2>
          </div>
          <div className={styles.wishlistTabsContainer}>
            {uniqueDivisions.map(division => (
              <button
                className={classNames(styles.wishlistTab, {
                  [styles.active]: activeTab === division,
                })}
                key={division}
                onClick={() => {
                  handleTabClick(division, list)
                }}
              >
                {division}
              </button>
            ))}
          </div>
          <div className={styles.wishlistContent}>
            {filteredWishlistItems.map(item => (
              <div className={styles.wishlistItemContainer} key={item.id}>
                <div className={styles.wishlistItemImage}>
                  <Image src={item.images[0]} alt={item.name} width={164} height={205} />
                </div>
                <div className={styles.wishlistItemDetails}>
                  <h3 className="text-xs text-balance">{item.name}</h3>
                  <p className="text-xs text-balance">${item.price}</p>
                </div>
                <div className={styles.wishlistItemColors}>
                  {
                    item.colors.map((color: string) => (
                      <div className={styles.wishlistItemColorContainer} key={color}>
                        <div className={styles.wishlistItemColor} style={{ backgroundColor: color }} />
                      </div>
                    ))
                  }
                </div>
                <div className={styles.wishlistIcon} onClick={() => {
                  handleRemoveFromWishlist(item.id)
                }}>
                  <Icon iconSvg={heartIcon} className='fill-black' />
                </div>
              </div>
            ))}
          </div>
        </>
    }
  </div>;
}